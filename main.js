/* ============================================================
   Dentist Trainer (DT) — main.js
   Entry Point — يربط data.js + clinic.js + DOM + Three.js
   لا يوجد export من هذا الملف.
   ============================================================ */

/* ------------------------------------------------------------
   1) Imports
   ------------------------------------------------------------ */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildClinic, createToothSet, highlightTooth, resetTeethHighlights } from './clinic.js';
import {
  TOOLS,
  CASES,
  FEEDBACK_MESSAGES,
  TOOTH_NAMES,
  getToolById,
  getCaseById,
  getToothName
} from './data.js';

/* ------------------------------------------------------------
   2) DOM Cache
   ------------------------------------------------------------ */
const canvas          = document.getElementById('scene');
const loadingScreen   = document.getElementById('loading-screen');
const loadingBar      = document.getElementById('loading-bar');
const caseTitleEl     = document.getElementById('case-title');
const stepCounterEl   = document.getElementById('step-counter');
const resetBtn        = document.getElementById('reset-btn');
const helpBtn         = document.getElementById('help-btn');
const finishBtn       = document.getElementById('finish-btn');
const toolsGrid       = document.getElementById('tools-grid');
const caseStepsEl     = document.getElementById('case-steps');
const casesListEl     = document.getElementById('cases-list');
const feedbackArea    = document.getElementById('feedback-area');
const retryStepBtn    = document.getElementById('retry-step-btn');
const errorModal      = document.getElementById('error-modal');
const errorTitle      = document.getElementById('error-title');
const errorDetail     = document.getElementById('error-detail');
const errorCorrect    = document.getElementById('error-correct');
const errorCloseBtn   = document.getElementById('error-close-btn');
const reportModal     = document.getElementById('report-modal');
const reportScore     = document.getElementById('report-score');
const reportTime      = document.getElementById('report-time');
const reportErrors    = document.getElementById('report-errors');
const reportTips      = document.getElementById('report-tips');
const reportRetryBtn  = document.getElementById('report-retry-btn');
const reportNewcaseBtn = document.getElementById('report-newcase-btn');
const helpModal       = document.getElementById('help-modal');
const helpCloseBtn    = document.getElementById('help-close-btn');
const toastContainer  = document.getElementById('toast-container');

/* ------------------------------------------------------------
   3) Three.js Setup
   ------------------------------------------------------------ */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f172a);
scene.fog = new THREE.Fog(0x0f172a, 12, 25);

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(4, 3, 5);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

/* ---------- إضاءة ---------- */
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 8, 5);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
scene.add(dirLight);

const spot = new THREE.SpotLight(0xffffff, 1.5);
spot.position.set(0, 5, 0);
spot.castShadow = true;
scene.add(spot);

/* ---------- Controls ---------- */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 15;
controls.maxPolarAngle = Math.PI * 0.49;
controls.target.set(0, 1, 0);

/* ------------------------------------------------------------
   4) بناء المشهد
   ------------------------------------------------------------ */
const clinicRoot = buildClinic(scene);
scene.add(clinicRoot);

const teethGroup = createToothSet(scene);
scene.add(teethGroup);

setTimeout(() => {
  loadingBar.style.width = '100%';
}, 300);

setTimeout(() => {
  loadingScreen.classList.add('hidden');
}, 700);

/* ------------------------------------------------------------
   5) State
   ------------------------------------------------------------ */
const state = {
  selectedTool: null,
  currentCase: null,
  currentStepIndex: 0,
  completedSteps: [],
  errors: [],
  startTime: null,
  caseStarted: false,
  isFinished: false
};

/* ------------------------------------------------------------
   6) renderCasesList
   ------------------------------------------------------------ */
function renderCasesList() {
  casesListEl.innerHTML = '';
  CASES.forEach(c => {
    const div = document.createElement('div');
    div.className = 'case-card';
    div.dataset.caseId = c.id;
    div.textContent = c.title;
    div.addEventListener('click', () => startCase(c.id));
    casesListEl.appendChild(div);
  });
}

/* ------------------------------------------------------------
   7) renderToolsGrid
   ------------------------------------------------------------ */
function renderToolsGrid() {
  toolsGrid.innerHTML = '';
  TOOLS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'tool-btn';
    btn.dataset.toolId = t.id;
    btn.title = t.description;
    btn.innerHTML = `${t.icon}<span>${t.name}</span>`;
    btn.addEventListener('click', () => selectTool(t.id));
    toolsGrid.appendChild(btn);
  });
}

/* ------------------------------------------------------------
   8) selectTool
   ------------------------------------------------------------ */
function selectTool(toolId) {
  state.selectedTool = toolId;

  document.querySelectorAll('.tool-btn').forEach(b => {
    b.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.tool-btn[data-tool-id="${toolId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const tool = getToolById(toolId);
  toast(`تم اختيار: ${tool ? tool.name : toolId}`, 'info');
  canvas.style.cursor = 'crosshair';
}

/* ------------------------------------------------------------
   9) resetSelectedTool
   ------------------------------------------------------------ */
function resetSelectedTool() {
  state.selectedTool = null;
  document.querySelectorAll('.tool-btn').forEach(b => {
    b.classList.remove('active');
  });
  canvas.style.cursor = 'default';
}

/* ------------------------------------------------------------
   10) startCase
   ------------------------------------------------------------ */
function startCase(caseId) {
  state.currentCase = getCaseById(caseId);
  if (!state.currentCase) {
    showInfo('الحالة غير موجودة');
    return;
  }

  state.selectedTool = null;
  state.currentStepIndex = 0;
  state.completedSteps = [];
  state.errors = [];
  state.startTime = Date.now();
  state.caseStarted = true;
  state.isFinished = false;

  caseTitleEl.textContent = state.currentCase.title;
  updateStepCounter();
  renderCaseSteps();
  resetSelectedTool();

  document.querySelectorAll('.case-card').forEach(c => {
    c.classList.remove('active');
  });
  const activeCard = document.querySelector(`.case-card[data-case-id="${caseId}"]`);
  if (activeCard) activeCard.classList.add('active');

  resetTeethHighlights(scene);
  if (state.currentCase.toothId) {
    highlightTooth(scene, state.currentCase.toothId, 0x0ea5e9);
  }

  showInfo(`بدأت حالة: ${state.currentCase.title}`);
  resetSelectedTool();
}

/* ------------------------------------------------------------
   11) updateStepCounter
   ------------------------------------------------------------ */
function updateStepCounter() {
  const total = state.currentCase ? state.currentCase.steps.length : 0;
  stepCounterEl.textContent = `الخطوة ${state.currentStepIndex} من ${total}`;
}

/* ------------------------------------------------------------
   12) renderCaseSteps
   ------------------------------------------------------------ */
function renderCaseSteps() {
  caseStepsEl.innerHTML = '';
  if (!state.currentCase) return;

  state.currentCase.steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step-item';

    if (i < state.currentStepIndex) {
      div.classList.add('done');
      div.textContent = '✅ ' + step.instruction;
    } else if (i === state.currentStepIndex) {
      div.classList.add('current');
      div.textContent = '⏳ ' + step.instruction;
    } else {
      div.textContent = '• ' + step.instruction;
    }

    caseStepsEl.appendChild(div);
  });
}

/* ------------------------------------------------------------
   13) Raycaster
   ------------------------------------------------------------ */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

canvas.addEventListener('pointermove', (e) => {
  const r = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(teethGroup.children, true);

  if (hits.length > 0) {
    canvas.style.cursor = state.selectedTool ? 'crosshair' : 'pointer';
  } else {
    canvas.style.cursor = 'default';
  }
});

/*
  فرق بين الـ click والـ drag:
  - pointerdown بيخزن نقطة البداية والوقت.
  - pointerup بيفحص المسافة والزمن. لو المستخدم سحب (drag) بهدف تدوير الكاميرا،
    مننفذش handleToothClick. لو ضغطة سريعة بدون حركة، بنفذ الاختيار.
*/
let pointerDownX = 0;
let pointerDownY = 0;
let pointerDownTime = 0;

canvas.addEventListener('pointerdown', (e) => {
  pointerDownX = e.clientX;
  pointerDownY = e.clientY;
  pointerDownTime = Date.now();
});

canvas.addEventListener('pointerup', (e) => {
  const dx = e.clientX - pointerDownX;
  const dy = e.clientY - pointerDownY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const elapsed = Date.now() - pointerDownTime;

  /* لو المستخدم عمل drag (تحرك أكتر من 5 بكسل أو استغرق أكتر من 500ms) — مش click */
  if (dist > 5 || elapsed > 500) return;

  const r = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(teethGroup.children, true);

  if (hits.length === 0) return;

  let obj = hits[0].object;
  while (obj && (!obj.userData || obj.userData.type !== 'tooth')) {
    obj = obj.parent;
  }

  if (obj && obj.userData && obj.userData.id) {
    handleToothClick(obj.userData.id);
  }
});

/* ------------------------------------------------------------
   14) handleToothClick
   ------------------------------------------------------------ */
function handleToothClick(toothId) {
  if (!state.caseStarted) {
    showInfo('اختر حالة أولاً');
    return;
  }
  if (state.isFinished) return;

  if (!state.selectedTool) {
    showError(
      'لا توجد أداة',
      FEEDBACK_MESSAGES.noTool,
      'اختر أداة من صندوق الأدوات قبل التفاعل مع السن.'
    );
    return;
  }

  const step = state.currentCase.steps[state.currentStepIndex];
  if (!step) return;

  const toolName = getToolById(state.selectedTool)?.name || state.selectedTool;
  const expectedToolName = getToolById(step.tool)?.name || step.tool;

  if (state.selectedTool !== step.tool) {
    showError(
      'الأداة غير مناسبة',
      FEEDBACK_MESSAGES.wrongTool(expectedToolName, toolName),
      step.instruction
    );
    state.errors.push({ type: 'wrong_tool', at: Date.now() });
    return;
  }

  if (step.target !== null && toothId !== step.target) {
    showError(
      'السن غير صحيح',
      FEEDBACK_MESSAGES.wrongTooth(step.target, toothId),
      step.instruction
    );
    state.errors.push({ type: 'wrong_tooth', at: Date.now() });
    return;
  }

  showSuccess(step.successMsg);
  state.completedSteps.push(step.id);
  state.currentStepIndex++;
  updateStepCounter();
  renderCaseSteps();
  resetSelectedTool();

  if (state.currentStepIndex >= state.currentCase.steps.length) {
    finishCase();
  }
}

/* ------------------------------------------------------------
   15) finishCase
   ------------------------------------------------------------ */
function finishCase() {
  if (!state.caseStarted || !state.currentCase) return;
  state.isFinished = true;
  generateReport();
  resetTeethHighlights(scene);
}

/* ------------------------------------------------------------
   16) Feedback helpers
   ------------------------------------------------------------ */
function showSuccess(msg) {
  feedbackArea.className = 'success';
  feedbackArea.textContent = msg;
  toast(msg, 'success');
}

function showInfo(msg) {
  feedbackArea.className = 'info';
  feedbackArea.textContent = msg;
  toast(msg, 'info');
}

function showError(title, detail, correct) {
  errorTitle.textContent = title;
  errorDetail.textContent = detail;
  errorCorrect.textContent = correct;
  errorModal.classList.add('open');
}

function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  toastContainer.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ------------------------------------------------------------
   17) generateReport
   ------------------------------------------------------------ */
function generateReport() {
  if (!state.currentCase || !state.startTime) return;

  const timeSpent = Math.round((Date.now() - state.startTime) / 1000);
  const errorPenalty = state.errors.length * 8;
  const timeBonus = timeSpent < 120 ? 10 : timeSpent < 300 ? 5 : 0;

  /*
    إصلاح: النتيجة تتأثر بنسبة إتمام الخطوات.
    لو المستخدم ضغط "إنهاء" بدون تنفيذ أي خطوة، completionRatio = 0 → score = 0.
  */
  const totalSteps = state.currentCase.steps.length;
  const completedCount = state.completedSteps.length;
  const completionRatio = totalSteps > 0 ? completedCount / totalSteps : 0;
  const rawScore = 100 - errorPenalty + timeBonus;
  const score = Math.max(0, Math.min(100, Math.round(rawScore * completionRatio)));

  const tips = [];
  const wrongToolCount = state.errors.filter(e => e.type === 'wrong_tool').length;
  const wrongToothCount = state.errors.filter(e => e.type === 'wrong_tooth').length;

  if (wrongToolCount >= 2) {
    tips.push('ركز على اختيار الأداة المناسبة قبل الشروع في الإجراء.');
  }
  if (wrongToothCount >= 1) {
    tips.push('تأكد من تحديد السن الصحيح قبل التدخل.');
  }
  if (timeSpent > 300) {
    tips.push('حاول تحسين سرعة أدائك في الخطوات الأساسية.');
  }
  if (timeSpent < 60) {
    tips.push('سرعتك ممتازة، تأكد من دقة التنفيذ.');
  }
  if (state.errors.length === 0 && completedCount === totalSteps) {
    tips.push(FEEDBACK_MESSAGES.perfect);
  }
  if (completedCount < totalSteps) {
    tips.push('لم تكمل جميع خطوات الحالة. أكمل الخطوات المتبقية للحصول على نتيجة أفضل.');
  }

  reportScore.textContent = score;
  reportTime.textContent = `${timeSpent} ث`;
  reportErrors.textContent = state.errors.length;
  reportTips.innerHTML = tips.map(t => `<p>${t}</p>`).join('');

  saveReport({
    caseId: state.currentCase.id,
    score,
    timeSpent,
    errors: state.errors,
    date: new Date().toISOString()
  });

  reportModal.classList.add('open');
}

/* ------------------------------------------------------------
   18) saveReport
   ------------------------------------------------------------ */
function saveReport(report) {
  try {
    const key = 'dt_reports';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(report);
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    /* localStorage غير متاح — يتم تجاهل الحفظ بصمت */
  }
}

/* ------------------------------------------------------------
   19) ربط الأزرار
   ------------------------------------------------------------ */
errorCloseBtn.addEventListener('click', () => {
  errorModal.classList.remove('open');
});

helpCloseBtn.addEventListener('click', () => {
  helpModal.classList.remove('open');
});

helpBtn.addEventListener('click', () => {
  helpModal.classList.add('open');
});

resetBtn.addEventListener('click', () => {
  if (state.currentCase) startCase(state.currentCase.id);
});

finishBtn.addEventListener('click', () => {
  if (state.caseStarted) finishCase();
});

retryStepBtn.addEventListener('click', () => {
  resetSelectedTool();
  showInfo('أعد تنفيذ الخطوة الحالية');
});

reportRetryBtn.addEventListener('click', () => {
  reportModal.classList.remove('open');
  if (state.currentCase) startCase(state.currentCase.id);
});

reportNewcaseBtn.addEventListener('click', () => {
  reportModal.classList.remove('open');
  resetAll();
});

/* ------------------------------------------------------------
   20) resetAll
   ------------------------------------------------------------ */
function resetAll() {
  state.currentCase = null;
  state.caseStarted = false;
  state.isFinished = false;
  state.currentStepIndex = 0;
  state.completedSteps = [];
  state.errors = [];
  state.startTime = null;

  caseTitleEl.textContent = 'اختر حالة للبدء';
  stepCounterEl.textContent = 'الخطوة 0 من 0';
  caseStepsEl.innerHTML = '';
  feedbackArea.textContent = 'اختر حالة ثم أداة ثم اضغط على السن المناسب.';
  feedbackArea.className = '';

  document.querySelectorAll('.case-card').forEach(c => {
    c.classList.remove('active');
  });

  resetSelectedTool();
  resetTeethHighlights(scene);
}

/* ------------------------------------------------------------
   21) Animate loop
   ------------------------------------------------------------ */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

/* ------------------------------------------------------------
   22) Resize
   ------------------------------------------------------------ */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ------------------------------------------------------------
   23) Init
   ------------------------------------------------------------ */
renderCasesList();
renderToolsGrid();
