export const TOOLS = [
  {
    id: 'mirror',
    name: 'المرآة',
    description: 'أداة فحص تعكس أسطح الأسنان الداخلية وتساعد على رؤية المناطق الخلفية.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="5"/><path d="M12 12v9"/></svg>'
  },
  {
    id: 'probe',
    name: 'المسبار',
    description: 'أداة فحص دقيقة لتحديد عمق التسوس وقياس جيوب اللثة.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l8-8"/><path d="M12 12l5-5"/><circle cx="19" cy="5" r="2"/><path d="M3 21l1-1"/></svg>'
  },
  {
    id: 'syringe',
    name: 'حقنة البنج',
    description: 'حقنة تستخدم لإعطاء التخدير الموضعي قبل الإجراءات العلاجية.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4l-3 3"/><path d="M18 2l4 4"/><path d="M17 7L7 17l-4 4"/><path d="M4 16l4 4"/><path d="M9 13l2 2"/><path d="M12 10l2 2"/></svg>'
  },
  {
    id: 'forceps',
    name: 'الملقط',
    description: 'ملقط جراحي يستخدم للإمساك بالسن وخلعه من مكانه.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l7 9"/><path d="M19 3l-7 9"/><path d="M12 12v3"/><path d="M9 21l3-6 3 6"/></svg>'
  },
  {
    id: 'elevator',
    name: 'الرافعة السنية',
    description: 'أداة تستخدم لتحرير السن ورفعه من العظم قبل الخلع.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L14 10"/><path d="M14 10l4-6"/><path d="M18 4l3 2"/><path d="M3 21l1-1"/></svg>'
  },
  {
    id: 'handpiece',
    name: 'القبضة الآلية',
    description: 'قبضة دوارة تستخدم لحفر الأسنان وقطع الأنسجة الصلبة.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="12" height="6" rx="3"/><path d="M14 11h3"/><path d="M17 11l4 4"/><path d="M20 16l1 1"/></svg>'
  },
  {
    id: 'brush',
    name: 'فرشاة التنظيف',
    description: 'فرشاة تستخدم لتنظيف تجويف السن وأسطح الأسنان من البقايا.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l6-6"/><path d="M9 15l5-5"/><path d="M13 4l7 7"/><path d="M11 6l7 7"/></svg>'
  },
  {
    id: 'curing',
    name: 'ضوء التصليد',
    description: 'جهاز يصدر ضوءًا يستخدم لتصلب مواد الحشو الضوئية.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="4"/></svg>'
  },
  {
    id: 'scaler',
    name: 'المكشطة',
    description: 'أداة تستخدم لإزالة الجير والترسبات من أسطح الأسنان.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L14 10"/><path d="M14 10c2-2 4-2 6 0"/><path d="M20 10c0 2-2 3-3 2"/><path d="M3 21l1-1"/></svg>'
  },
  {
    id: 'suction',
    name: 'جهاز الشفط',
    description: 'أداة تسحب الدم واللعاب والسوائل للحفاظ على جفاف مجال العمل.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l6-6"/><path d="M9 15l5-5"/><path d="M14 10a4 4 0 0 1 6 0"/><path d="M20 10v4"/><path d="M18 14h4"/></svg>'
  },
  {
    id: 'explorer',
    name: 'المستكشف السني',
    description: 'أداة مدببة تستكشف الشقوق والنخور الدقيقة على سطح السن.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L15 9"/><path d="M15 9c1-3 3-4 5-3"/><path d="M20 6l1 2"/><path d="M3 21l1-1"/></svg>'
  },
  {
    id: 'excavator',
    name: 'المحفرة',
    description: 'أداة ذات طرف مجوف تستخدم لإزالة الأنسجة التالفة من تجويف السن.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L14 10"/><path d="M14 10l2-6"/><path d="M16 4c2 0 3 2 2 4l-2 2z"/><path d="M3 21l1-1"/></svg>'
  },
  {
    id: 'matrix',
    name: 'المصفوفة السنية',
    description: 'شريط معدني يحيط بالسن للحفاظ على شكل الحشو أثناء وضعه.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v18"/><path d="M18 3v18"/><path d="M6 7h12"/><path d="M6 17h12"/></svg>'
  },
  {
    id: 'wedge',
    name: 'الإسفين',
    description: 'قطعة صغيرة تثبت المصفوفة بين الأسنان وتفصل بينها.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19L21 19L12 5Z"/><path d="M7 19v-2"/><path d="M17 19v-2"/></svg>'
  },
  {
    id: 'suture',
    name: 'خيط الخياطة',
    description: 'خيط جراحي مع إبرة يستخدم لإغلاق الجروح بعد الإجراءات الجراحية.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-6 0-12 4-12 10"/><path d="M8 14l-4 6"/><path d="M4 20l3-1"/><circle cx="19" cy="4" r="2"/></svg>'
  },
  {
    id: 'composite',
    name: 'الكمبوزيت',
    description: 'مادة حشو تجميلية بلون السن تستخدم لترميم التجاويف.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="12" rx="2"/><path d="M12 14v4"/><path d="M10 18h4"/><path d="M9 6h6"/><path d="M9 9h6"/></svg>'
  },
  {
    id: 'lightcure',
    name: 'جهاز التصليد الضوئي',
    description: 'جهاز محمول يوجه ضوءًا مكثفًا لتصلب الحشو التجميلي.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10"/><path d="M8 3v6a4 4 0 0 0 8 0V3"/><path d="M12 13v8"/><path d="M8 21h8"/></svg>'
  },
  {
    id: 'articulating',
    name: 'ورق الإطباق',
    description: 'ورق ملون يستخدم للتحقق من نقاط التلامس والإطباق بين الأسنان.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="1"/><path d="M7 8v8"/><path d="M12 8v8"/><path d="M17 8v8"/></svg>'
  }
];

export const CASES = [
  {
    id: 'caries-36',
    title: 'حشو ضرس علوي',
    description: 'مريض يشكو من ألم في السن 36 مع وجود تسوس ظاهر. يحتاج حشو تجميلي بعد إزالة التسوس.',
    toothId: '36',
    difficulty: 'سهل',
    estimatedTime: 180,
    steps: [
      { id: 1, tool: 'probe', target: '36', instruction: 'افحص السن 36 بالمسبار لتحديد عمق التسوس', successMsg: 'تم الفحص بنجاح' },
      { id: 2, tool: 'syringe', target: '36', instruction: 'أعطِ التخدير الموضعي حول السن 36', successMsg: 'تم التخدير' },
      { id: 3, tool: 'handpiece', target: '36', instruction: 'احفر التسوس باستخدام القبضة الآلية', successMsg: 'تم إزالة التسوس' },
      { id: 4, tool: 'brush', target: '36', instruction: 'نظف التجويف جيدًا قبل الحشو', successMsg: 'تم التنظيف' },
      { id: 5, tool: 'curing', target: '36', instruction: 'صلّب الحشو بضوء التصليد', successMsg: 'تم تصليد الحشو' }
    ]
  },
  {
    id: 'extraction-46',
    title: 'خلع سن',
    description: 'مريض يعاني من سن 46 متآكل وغير قابل للترميم. يحتاج إلى خلع كامل مع إغلاق الجرح.',
    toothId: '46',
    difficulty: 'متوسط',
    estimatedTime: 240,
    steps: [
      { id: 1, tool: 'syringe', target: '46', instruction: 'أعطِ التخدير الموضعي حول السن 46', successMsg: 'تم التخدير' },
      { id: 2, tool: 'elevator', target: '46', instruction: 'استخدم الرافعة لتحرير السن من الرباط السني', successMsg: 'تم تحرير السن' },
      { id: 3, tool: 'forceps', target: '46', instruction: 'أمسك السن بالملقط واخلعه بحركة محسوبة', successMsg: 'تم خلع السن' },
      { id: 4, tool: 'suction', target: '46', instruction: 'اشفط الدم واللعاب من موضع الخلع', successMsg: 'تم تنظيف الموضع' },
      { id: 5, tool: 'suture', target: '46', instruction: 'خِط الجرح بخيط الخياطة الجراحي', successMsg: 'تم خياطة الجرح' }
    ]
  },
  {
    id: 'cleaning-full',
    title: 'تنظيف شامل',
    description: 'مريض يعاني من ترسبات جيرية منتشرة في الفم بالكامل. يحتاج جلسة تنظيف شاملة لجميع الأسنان.',
    toothId: null,
    difficulty: 'سهل',
    estimatedTime: 150,
    steps: [
      { id: 1, tool: 'mirror', target: null, instruction: 'افحص الفم بالمرآة لتحديد أماكن الترسيب', successMsg: 'تم الفحص' },
      { id: 2, tool: 'scaler', target: null, instruction: 'أزل الجير والترسبات عن جميع الأسنان بالمكشطة', successMsg: 'تم إزالة الجير' },
      { id: 3, tool: 'brush', target: null, instruction: 'نظف أسطح الأسنان بالفرشاة والمعجون', successMsg: 'تم التنظيف' },
      { id: 4, tool: 'explorer', target: null, instruction: 'تحقق من نظافة الأسطح بالمستكشف السني', successMsg: 'تم التحقق من النظافة' },
      { id: 5, tool: 'suction', target: null, instruction: 'اشفط بقايا التنظيف والماء من الفم', successMsg: 'تم الشفط' }
    ]
  },
  {
    id: 'anesthesia-upper',
    title: 'تخدير موضعي',
    description: 'مريض يحتاج تخديرًا موضعيًا في الفك العلوي قبل بدء العلاج. يجب التأكد من فاعلية التخدير قبل المتابعة.',
    toothId: '16',
    difficulty: 'سهل',
    estimatedTime: 90,
    steps: [
      { id: 1, tool: 'mirror', target: '16', instruction: 'حدد موقع الحقن بالمرآة', successMsg: 'تم تحديد الموقع' },
      { id: 2, tool: 'suction', target: '16', instruction: 'جفف المنطقة قبل الحقن بجهاز الشفط', successMsg: 'تم تجفيف المنطقة' },
      { id: 3, tool: 'syringe', target: '16', instruction: 'أعطِ التخدير الموضعي في المنطقة العلوية', successMsg: 'تم التخدير' },
      { id: 4, tool: 'probe', target: '16', instruction: 'تحقق من زوال الإحساس بالمسبار', successMsg: 'تم التأكد من فاعلية التخدير' }
    ]
  },
  {
    id: 'composite-26',
    title: 'حشو تجميلي',
    description: 'مريض لديه تسوس في السن 26 مع رغبة في حشو بلون السن. يحتاج ترميمًا تجميليًا بطبقات الكمبوزيت.',
    toothId: '26',
    difficulty: 'متوسط',
    estimatedTime: 240,
    steps: [
      { id: 1, tool: 'probe', target: '26', instruction: 'افحص السن 26 بالمسبار لتحديد حجم التسوس', successMsg: 'تم الفحص' },
      { id: 2, tool: 'syringe', target: '26', instruction: 'أعطِ التخدير الموضعي حول السن 26', successMsg: 'تم التخدير' },
      { id: 3, tool: 'handpiece', target: '26', instruction: 'احفر التسوس وأزل الأنسجة التالفة', successMsg: 'تم إزالة التسوس' },
      { id: 4, tool: 'matrix', target: '26', instruction: 'ركّب المصفوفة السنية حول السن', successMsg: 'تم تركيب المصفوفة' },
      { id: 5, tool: 'wedge', target: '26', instruction: 'ثبّت الإسفين بين الأسنان لتثبيت المصفوفة', successMsg: 'تم تثبيت الإسفين' },
      { id: 6, tool: 'composite', target: '26', instruction: 'ضع طبقات الكمبوزيت في التجويف', successMsg: 'تم وضع الحشو' },
      { id: 7, tool: 'lightcure', target: '26', instruction: 'صلّب الكمبوزيت بالضوء المكثف', successMsg: 'تم تصليد الحشو' },
      { id: 8, tool: 'articulating', target: '26', instruction: 'تحقق من الإطباق بورق الإطباق', successMsg: 'تم ضبط الإطباق' }
    ]
  },
  {
    id: 'root-canal-16',
    title: 'علاج عصب',
    description: 'مريض يشكو من ألم حاد ومستمر في السن 16 مع التهاب في العصب. يحتاج علاجًا كاملًا لقناة الجذر.',
    toothId: '16',
    difficulty: 'صعب',
    estimatedTime: 400,
    steps: [
      { id: 1, tool: 'probe', target: '16', instruction: 'افحص السن 16 وحدد وجود التهاب العصب', successMsg: 'تم الفحص' },
      { id: 2, tool: 'syringe', target: '16', instruction: 'أعطِ التخدير الموضعي حول السن 16', successMsg: 'تم التخدير' },
      { id: 3, tool: 'handpiece', target: '16', instruction: 'افتح التاج للوصول إلى قناة الجذر', successMsg: 'تم فتح القناة' },
      { id: 4, tool: 'excavator', target: '16', instruction: 'أزل الأنسجة العصبية التالفة من القناة بالمحفرة', successMsg: 'تم استخراج العصب' },
      { id: 5, tool: 'scaler', target: '16', instruction: 'نظف القناة من البقايا بالمكشطة', successMsg: 'تم تنظيف القناة' },
      { id: 6, tool: 'suction', target: '16', instruction: 'اشفط السوائل من داخل القناة', successMsg: 'تم الشفط' },
      { id: 7, tool: 'composite', target: '16', instruction: 'احشُ القناة بمادة الحشو', successMsg: 'تم حشو القناة' },
      { id: 8, tool: 'lightcure', target: '16', instruction: 'صلّب الحشو بالضوء المكثف', successMsg: 'تم التصليد' }
    ]
  },
  {
    id: 'surgical-38',
    title: 'خلع جراحي',
    description: 'مريض لديه ضرس عقل سفلي منطمر جزئيًا في السن 38. يحتاج خلعًا جراحيًا يتضمن فتح الأنسجة وتقطيع الضرس.',
    toothId: '38',
    difficulty: 'صعب',
    estimatedTime: 360,
    steps: [
      { id: 1, tool: 'probe', target: '38', instruction: 'افحص ضرس العقل 38 وحدد زاوية الانطمار', successMsg: 'تم الفحص' },
      { id: 2, tool: 'syringe', target: '38', instruction: 'أعطِ التخدير الموضعي حول الضرس', successMsg: 'تم التخدير' },
      { id: 3, tool: 'handpiece', target: '38', instruction: 'افتح الأنسجة واقطع الضرس بالقبضة الآلية', successMsg: 'تم تقطيع الضرس' },
      { id: 4, tool: 'elevator', target: '38', instruction: 'ارفع الضرس بالرافعة السنية', successMsg: 'تم رفع الضرس' },
      { id: 5, tool: 'forceps', target: '38', instruction: 'اخلع الضرس بالملقط الجراحي', successMsg: 'تم الخلع' },
      { id: 6, tool: 'suction', target: '38', instruction: 'اشفط الدم من الجرح', successMsg: 'تم الشفط' },
      { id: 7, tool: 'suture', target: '38', instruction: 'خِط الجرح بخيط الخياطة الجراحي', successMsg: 'تم الخياطة' }
    ]
  },
  {
    id: 'implant-36',
    title: 'زراعة سن',
    description: 'مريض فقد السن 36 ويرغب في تعويضه بزرعة سنية. يحتاج تحضير الموقع ووضع الزرعة ثم إغلاق اللثة.',
    toothId: '36',
    difficulty: 'صعب',
    estimatedTime: 400,
    steps: [
      { id: 1, tool: 'probe', target: '36', instruction: 'افحص المكان المفقود للسن 36', successMsg: 'تم الفحص' },
      { id: 2, tool: 'syringe', target: '36', instruction: 'أعطِ التخدير الموضعي في موضع الزرعة', successMsg: 'تم التخدير' },
      { id: 3, tool: 'handpiece', target: '36', instruction: 'احفر تجويف الزرعة في العظم', successMsg: 'تم تحضير التجويف' },
      { id: 4, tool: 'elevator', target: '36', instruction: 'ارفع الأنسجة اللثوية لإظهار العظم', successMsg: 'تم رفع الأنسجة' },
      { id: 5, tool: 'suction', target: '36', instruction: 'اشفط الدم للحفاظ على جفاف الموقع', successMsg: 'تم الشفط' },
      { id: 6, tool: 'suture', target: '36', instruction: 'خِط اللثة حول موضع الزرعة', successMsg: 'تم الخياطة' }
    ]
  }
];

export const FEEDBACK_MESSAGES = {
  noTool: 'يجب اختيار أداة أولاً قبل التفاعل مع السن.',
  wrongTool: (expected, actual) => `الأداة غير مناسبة لهذه الخطوة. المطلوب: "${expected}". اخترت: "${actual}".`,
  wrongTooth: (expected, actual) => `السن المستهدف غير صحيح. المطلوب: السن ${expected}. اخترت: السن ${actual}.`,
  wrongOrder: 'لم تتبع الترتيب الصحيح للخطوات. اتبع الترتيب المعروض في قائمة الحالة.',
  success: 'أداء صحيح، استمر على هذا المستوى.',
  caseComplete: 'أتممت الحالة بنجاح!',
  perfect: 'أداء مثالي بدون أخطاء!'
};

export const TOOTH_NAMES = {
  '11': 'الثنية العلوية اليمنى',
  '12': 'الرباعية العلوية اليمنى',
  '13': 'الناب العلوي الأيمن',
  '14': 'الضاحك الأول العلوي الأيمن',
  '15': 'الضاحك الثاني العلوي الأيمن',
  '16': 'الرحى الأولى العلوية اليمنى',
  '17': 'الرحى الثانية العلوية اليمنى',
  '18': 'ضرس العقل العلوي الأيمن',
  '21': 'الثنية العلوية اليسرى',
  '22': 'الرباعية العلوية اليسرى',
  '23': 'الناب العلوي الأيسر',
  '24': 'الضاحك الأول العلوي الأيسر',
  '25': 'الضاحك الثاني العلوي الأيسر',
  '26': 'الرحى الأولى العلوية اليسرى',
  '27': 'الرحى الثانية العلوية اليسرى',
  '28': 'ضرس العقل العلوي الأيسر',
  '31': 'الثنية السفلية اليسرى',
  '32': 'الرباعية السفلية اليسرى',
  '33': 'الناب السفلي الأيسر',
  '34': 'الضاحك الأول السفلي الأيسر',
  '35': 'الضاحك الثاني السفلي الأيسر',
  '36': 'الرحى الأولى السفلية اليسرى',
  '37': 'الرحى الثانية السفلية اليسرى',
  '38': 'ضرس العقل السفلي الأيسر',
  '41': 'الثنية السفلية اليمنى',
  '42': 'الرباعية السفلية اليمنى',
  '43': 'الناب السفلي الأيمن',
  '44': 'الضاحك الأول السفلي الأيمن',
  '45': 'الضاحك الثاني السفلي الأيمن',
  '46': 'الرحى الأولى السفلية اليمنى',
  '47': 'الرحى الثانية السفلية اليمنى',
  '48': 'ضرس العقل السفلي اليمنى'
};

export function getToolById(id) {
  return TOOLS.find(t => t.id === id);
}

export function getCaseById(id) {
  return CASES.find(c => c.id === id);
}

export function getToothName(id) {
  return TOOTH_NAMES[id] || `السن ${id}`;
}
