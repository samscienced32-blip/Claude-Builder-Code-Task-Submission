async function main() {
  const fonts = await loadFonts();

  const colors = {
    white: rgb(255, 255, 255),
    black: rgb(8, 8, 8),
    gray: rgb(74, 74, 74),
    line: rgb(15, 15, 15),
    softLine: rgb(218, 218, 218),
    wage: rgb(222, 244, 231),
    grievance: rgb(255, 229, 233),
    send: rgb(222, 235, 255),
    language: rgb(244, 244, 244),
    confirm: rgb(218, 246, 227),
    fail: rgb(255, 230, 230),
    sun: rgb(255, 242, 184),
    success: rgb(17, 118, 75),
    danger: rgb(176, 0, 32),
    blue: rgb(0, 82, 155)
  };

  const pageName = "Dust-safe fintech model";
  const existing = figma.root.children.find((page) => page.name === pageName);
  const page = existing || figma.createPage();
  page.name = pageName;
  await figma.setCurrentPageAsync(page);
  await page.loadAsync();
  [...page.children].forEach((node) => node.remove());

  const langScreen = createScreen("START - choose language", 0, 0, colors);
  const notes = createNotesFrame(0, 860, colors, fonts);

  const languages = [
    {
      key: "hi",
      name: "Hindi",
      nativeName: "हिन्दी",
      chooseTitle: "भाषा चुनें",
      chooseHint: "एक बार चुनें",
      homeTitle: "काम चुनें",
      homeHint: "बड़ा बटन दबाएं",
      wage: "मजदूरी पर्ची",
      wageHint: "आज की पर्ची",
      grievance: "शिकायत",
      grievanceHint: "ठेकेदार के खिलाफ",
      send: "₹800 घर भेजें",
      sendHint: "घर वाला नंबर",
      wageOpen: "पर्ची खुली",
      wageAmount: "आज: ₹1,200",
      grievanceReady: "शिकायत भेजें",
      grievanceBody: "ठेकेदार ने पैसे रोके",
      sendConfirm: "₹800 भेजें?",
      sendTo: "घर",
      confirm: "दबाकर भेजें",
      cancel: "रोकें",
      done: "हो गया",
      fail: "नहीं हुआ",
      tryAgain: "फिर कोशिश करें",
      back: "वापस",
      audioWage: "मजदूरी पर्ची चुनी",
      audioGrievance: "शिकायत चुनी",
      audioSend: "आठ सौ रुपये घर भेजें",
      audioSuccess: "काम हो गया",
      audioFail: "काम नहीं हुआ"
    },
    {
      key: "mr",
      name: "Marathi",
      nativeName: "मराठी",
      chooseTitle: "भाषा निवडा",
      chooseHint: "एकदाच निवडा",
      homeTitle: "काम निवडा",
      homeHint: "मोठे बटण दाबा",
      wage: "मजुरी पावती",
      wageHint: "आजची पावती",
      grievance: "तक्रार",
      grievanceHint: "कंत्राटदाराबद्दल",
      send: "₹800 घरी पाठवा",
      sendHint: "घरचा नंबर",
      wageOpen: "पावती उघडली",
      wageAmount: "आज: ₹1,200",
      grievanceReady: "तक्रार पाठवा",
      grievanceBody: "कंत्राटदाराने पैसे थांबवले",
      sendConfirm: "₹800 पाठवायचे?",
      sendTo: "घरी",
      confirm: "दाबून पाठवा",
      cancel: "थांबा",
      done: "झाले",
      fail: "झाले नाही",
      tryAgain: "पुन्हा करा",
      back: "मागे",
      audioWage: "मजुरी पावती निवडली",
      audioGrievance: "तक्रार निवडली",
      audioSend: "आठशे रुपये घरी पाठवा",
      audioSuccess: "काम झाले",
      audioFail: "काम झाले नाही"
    },
    {
      key: "bn",
      name: "Bengali",
      nativeName: "বাংলা",
      chooseTitle: "ভাষা বাছুন",
      chooseHint: "একবার বাছুন",
      homeTitle: "কাজ বাছুন",
      homeHint: "বড় বোতাম চাপুন",
      wage: "মজুরির স্লিপ",
      wageHint: "আজকের স্লিপ",
      grievance: "অভিযোগ",
      grievanceHint: "ঠিকাদারের বিরুদ্ধে",
      send: "₹800 বাড়ি পাঠান",
      sendHint: "বাড়ির নম্বর",
      wageOpen: "স্লিপ খুলেছে",
      wageAmount: "আজ: ₹1,200",
      grievanceReady: "অভিযোগ পাঠান",
      grievanceBody: "ঠিকাদার টাকা আটকে রেখেছে",
      sendConfirm: "₹800 পাঠাবেন?",
      sendTo: "বাড়ি",
      confirm: "চেপে পাঠান",
      cancel: "থামান",
      done: "হয়ে গেছে",
      fail: "হয়নি",
      tryAgain: "আবার করুন",
      back: "ফিরুন",
      audioWage: "মজুরির স্লিপ বাছা হয়েছে",
      audioGrievance: "অভিযোগ বাছা হয়েছে",
      audioSend: "আটশো টাকা বাড়ি পাঠান",
      audioSuccess: "কাজ হয়ে গেছে",
      audioFail: "কাজ হয়নি"
    },
    {
      key: "ta",
      name: "Tamil",
      nativeName: "தமிழ்",
      chooseTitle: "மொழி தேர்வு",
      chooseHint: "ஒரு முறை தேர்வு",
      homeTitle: "வேலை தேர்வு",
      homeHint: "பெரிய பட்டன் அழுத்தவும்",
      wage: "சம்பள சீட்டு",
      wageHint: "இன்றைய சீட்டு",
      grievance: "புகார்",
      grievanceHint: "ஒப்பந்ததாரர் மீது",
      send: "₹800 வீட்டுக்கு",
      sendHint: "வீட்டு எண்",
      wageOpen: "சீட்டு திறந்தது",
      wageAmount: "இன்று: ₹1,200",
      grievanceReady: "புகார் அனுப்பு",
      grievanceBody: "ஒப்பந்ததாரர் பணம் நிறுத்தினார்",
      sendConfirm: "₹800 அனுப்பவா?",
      sendTo: "வீடு",
      confirm: "அழுத்தி அனுப்பு",
      cancel: "நிறுத்து",
      done: "முடிந்தது",
      fail: "முடியவில்லை",
      tryAgain: "மீண்டும் செய்",
      back: "திரும்ப",
      audioWage: "சம்பள சீட்டு தேர்வு",
      audioGrievance: "புகார் தேர்வு",
      audioSend: "எண்ணூறு ரூபாய் வீட்டுக்கு அனுப்பு",
      audioSuccess: "வேலை முடிந்தது",
      audioFail: "வேலை முடியவில்லை"
    }
  ];

  buildLanguageScreen(langScreen, languages, colors, fonts);

  const localized = {};
  languages.forEach((language, index) => {
    const x = 460;
    const y = index * 860;
    localized[language.key] = {
      home: createScreen("HOME - " + language.name, x, y, colors),
      wage: createScreen("WAGE SLIP - " + language.name, x + 460, y, colors),
      grievance: createScreen("GRIEVANCE - " + language.name, x + 920, y, colors),
      send: createScreen("SEND HOME - " + language.name, x + 1380, y, colors),
      success: createScreen("SUCCESS - " + language.name, x + 1840, y, colors),
      fail: createScreen("FAIL - " + language.name, x + 2300, y, colors)
    };

    buildHome(localized[language.key].home, language, colors, fonts);
    buildWage(localized[language.key].wage, language, colors, fonts);
    buildGrievance(localized[language.key].grievance, language, colors, fonts);
    buildSend(localized[language.key].send, language, colors, fonts);
    buildSuccess(localized[language.key].success, language, colors, fonts);
    buildFail(localized[language.key].fail, language, colors, fonts);
  });

  for (const language of languages) {
    const group = localized[language.key];
    await linkByName(langScreen, "language_" + language.key, group.home.id);
    await linkByName(group.home, "button_wage_" + language.key, group.wage.id);
    await linkByName(group.home, "button_grievance_" + language.key, group.grievance.id);
    await linkByName(group.home, "button_send_" + language.key, group.send.id);
    await linkByName(group.wage, "button_done_" + language.key, group.success.id);
    await linkByName(group.wage, "button_fail_" + language.key, group.fail.id);
    await linkByName(group.grievance, "button_done_" + language.key, group.success.id);
    await linkByName(group.grievance, "button_fail_" + language.key, group.fail.id);
    await linkByName(group.send, "button_done_" + language.key, group.success.id);
    await linkByName(group.send, "button_fail_" + language.key, group.fail.id);
    await linkByName(group.success, "button_back_" + language.key, group.home.id);
    await linkByName(group.fail, "button_back_" + language.key, group.home.id);
  }

  page.flowStartingPoints = [{ nodeId: langScreen.id, name: "Start: choose language" }];
  figma.viewport.scrollAndZoomIntoView([langScreen, notes]);
  figma.closePlugin("Updated the large-button Figma prototype model.");
}

async function loadFonts() {
  const candidates = [
    {
      regular: { family: "Nirmala UI", style: "Regular" },
      bold: { family: "Nirmala UI", style: "Bold" }
    },
    {
      regular: { family: "Noto Sans", style: "Regular" },
      bold: { family: "Noto Sans", style: "Bold" }
    },
    {
      regular: { family: "Inter", style: "Regular" },
      bold: { family: "Inter", style: "Bold" }
    }
  ];

  for (const fonts of candidates) {
    try {
      await figma.loadFontAsync(fonts.regular);
      await figma.loadFontAsync(fonts.bold);
      return fonts;
    } catch (error) {
      // Try the next installed font family.
    }
  }

  const available = await figma.listAvailableFontsAsync();
  const first = available[0] && available[0].fontName;
  if (!first) throw new Error("No usable fonts found.");
  await figma.loadFontAsync(first);
  return { regular: first, bold: first };
}

function buildLanguageScreen(screen, languages, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addText(screen, "Choose language", 20, 74, 320, 42, 30, fonts.bold, colors.black);
  addText(screen, "One-time setup", 20, 120, 320, 30, 18, fonts.regular, colors.gray);
  addLightSensorCard(screen, 20, 170, colors, fonts);

  languages.forEach((language, index) => {
    addLanguageButton(
      screen,
      "language_" + language.key,
      language.nativeName,
      language.name,
      20,
      328 + index * 96,
      colors,
      fonts
    );
  });
}

function buildHome(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addText(screen, language.homeTitle, 20, 64, 320, 42, 30, fonts.bold, colors.black);
  addText(screen, language.homeHint, 20, 110, 320, 30, 18, fonts.regular, colors.gray);
  addAudioCue(screen, "Audio on tap", language.nativeName, 20, 160, colors, fonts);
  addLightPill(screen, 20, 220, colors, fonts);

  addBigActionButton(screen, "button_wage_" + language.key, language.wage, language.wageHint, 16, 274, colors.wage, colors, fonts, "rupee");
  addBigActionButton(screen, "button_grievance_" + language.key, language.grievance, language.grievanceHint, 16, 436, colors.grievance, colors, fonts, "grievance");
  addBigActionButton(screen, "button_send_" + language.key, language.send, language.sendHint, 16, 598, colors.send, colors, fonts, "transfer");
}

function buildWage(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addAudioCue(screen, "Selected audio", language.audioWage, 20, 74, colors, fonts);
  addLargeIconPanel(screen, "rupee", 92, 168, colors.wage, colors, fonts);
  addText(screen, language.wageOpen, 20, 350, 320, 44, 32, fonts.bold, colors.black);
  addText(screen, language.wageAmount, 20, 404, 320, 42, 28, fonts.bold, colors.black);
  addText(screen, "ID: 7421", 20, 456, 320, 30, 18, fonts.regular, colors.gray);
  addBottomButton(screen, "button_done_" + language.key, language.done, 16, 604, colors.confirm, colors, fonts, "success");
  addBottomButton(screen, "button_fail_" + language.key, language.fail, 16, 684, colors.fail, colors, fonts, "fail");
}

function buildGrievance(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addAudioCue(screen, "Selected audio", language.audioGrievance, 20, 74, colors, fonts);
  addLargeIconPanel(screen, "grievance", 92, 158, colors.grievance, colors, fonts);
  addText(screen, language.grievanceReady, 20, 350, 320, 44, 31, fonts.bold, colors.black);
  addText(screen, language.grievanceBody, 20, 404, 320, 64, 20, fonts.regular, colors.black);
  addText(screen, "No typing. Voice/photo later.", 20, 486, 320, 30, 16, fonts.regular, colors.gray);
  addBottomButton(screen, "button_done_" + language.key, language.done, 16, 604, colors.confirm, colors, fonts, "success");
  addBottomButton(screen, "button_fail_" + language.key, language.cancel, 16, 684, colors.fail, colors, fonts, "fail");
}

function buildSend(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addAudioCue(screen, "Selected audio", language.audioSend, 20, 74, colors, fonts);
  addLargeIconPanel(screen, "transfer", 92, 158, colors.send, colors, fonts);
  addText(screen, language.sendConfirm, 20, 350, 320, 44, 32, fonts.bold, colors.black);
  addText(screen, language.sendTo, 20, 404, 320, 36, 24, fonts.bold, colors.black);
  addText(screen, "Hold. Vibrate. Send.", 20, 452, 320, 30, 16, fonts.regular, colors.gray);
  addBottomButton(screen, "button_done_" + language.key, language.confirm, 16, 604, colors.confirm, colors, fonts, "success");
  addBottomButton(screen, "button_fail_" + language.key, language.cancel, 16, 684, colors.fail, colors, fonts, "fail");
}

function buildSuccess(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addToneCue(screen, "SUCCESS TONE", language.audioSuccess, colors.success, 20, 74, colors, fonts);
  addSuccessIcon(screen, 112, 188, colors);
  addText(screen, language.done, 20, 350, 320, 50, 36, fonts.bold, colors.black);
  addText(screen, "Proof shown on screen", 20, 416, 320, 30, 18, fonts.regular, colors.gray);
  addBottomButton(screen, "button_back_" + language.key, language.back, 16, 650, colors.language, colors, fonts, "back");
}

function buildFail(screen, language, colors, fonts) {
  addTopStatus(screen, "AUTO LIGHT ON", colors, fonts);
  addToneCue(screen, "FAIL TONE", language.audioFail, colors.danger, 20, 74, colors, fonts);
  addFailIcon(screen, 112, 188, colors);
  addText(screen, language.fail, 20, 350, 320, 50, 36, fonts.bold, colors.black);
  addText(screen, language.tryAgain, 20, 416, 320, 30, 20, fonts.regular, colors.gray);
  addBottomButton(screen, "button_back_" + language.key, language.back, 16, 650, colors.language, colors, fonts, "back");
}

function createScreen(name, x, y, colors) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(360, 760);
  frame.x = x;
  frame.y = y;
  frame.cornerRadius = 28;
  frame.clipsContent = true;
  frame.fills = [{ type: "SOLID", color: colors.white }];
  frame.strokes = [{ type: "SOLID", color: colors.line }];
  frame.strokeWeight = 2;
  figma.currentPage.appendChild(frame);
  return frame;
}

function createNotesFrame(x, y, colors, fonts) {
  const frame = figma.createFrame();
  frame.name = "Evaluator notes";
  frame.resize(760, 760);
  frame.x = x;
  frame.y = y;
  frame.fills = [{ type: "SOLID", color: colors.white }];
  frame.strokes = [{ type: "SOLID", color: colors.softLine }];
  frame.strokeWeight = 1;
  figma.currentPage.appendChild(frame);
  addText(frame, "Prototype intent", 32, 36, 680, 40, 28, fonts.bold, colors.black);
  addText(frame, "First screen selects language once. The home screen then uses three bottom-heavy tap targets: daily wage slip, contractor grievance, and send ₹800 home.", 32, 92, 680, 86, 20, fonts.regular, colors.black);
  addText(frame, "Audio model", 32, 210, 680, 34, 24, fonts.bold, colors.black);
  addText(frame, "Each action screen has an audio cue panel showing the spoken phrase in the selected language. Success uses a green tone cue; failure uses a red tone cue. Figma cannot reliably generate phone speech playback from plugin-created prototype nodes, so this marks the audio behavior for evaluation.", 32, 258, 680, 126, 19, fonts.regular, colors.black);
  addText(frame, "Light model", 32, 420, 680, 34, 24, fonts.bold, colors.black);
  addText(frame, "Every screen shows AUTO LIGHT ON. In a real mobile build this should use the Ambient Light Sensor where available, then fall back to system brightness and a manual Sun Mode toggle. The Figma model uses pure white background, black text, thicker strokes, and light-tint buttons.", 32, 468, 680, 126, 19, fonts.regular, colors.black);
  addText(frame, "Tap test", 32, 630, 680, 34, 24, fonts.bold, colors.black);
  addText(frame, "Run from START, choose a language, then ask the evaluator to find wage slip, file complaint, and send ₹800 home using one thumb.", 32, 678, 680, 56, 19, fonts.regular, colors.black);
  return frame;
}

function addTopStatus(parent, label, colors, fonts) {
  addText(parent, "2G", 20, 18, 42, 22, 13, fonts.bold, colors.black);
  addSunIcon(parent, 74, 18, colors);
  addText(parent, label, 104, 18, 170, 22, 13, fonts.bold, colors.black);
  addText(parent, "BIG TAP", 286, 18, 60, 22, 13, fonts.bold, colors.black);
}

function addLanguageButton(parent, name, title, subtitle, x, y, colors, fonts) {
  const button = addButtonFrame(parent, name, x, y, 320, 78, colors.language, colors);
  addText(button, title, 22, 11, 190, 34, 28, fonts.bold, colors.black);
  addText(button, subtitle, 22, 48, 190, 20, 15, fonts.regular, colors.gray);
  addChevron(button, 276, 25, colors.black);
  return button;
}

function addBigActionButton(parent, name, title, subtitle, x, y, bg, colors, fonts, iconType) {
  const button = addButtonFrame(parent, name, x, y, 328, 144, bg, colors);
  addIcon(button, iconType, 18, 22, 96, colors, fonts);
  addText(button, title, 128, 28, 180, 42, 28, fonts.bold, colors.black);
  addText(button, subtitle, 128, 80, 178, 40, 18, fonts.regular, colors.gray);
  return button;
}

function addBottomButton(parent, name, title, x, y, bg, colors, fonts, iconType) {
  const button = addButtonFrame(parent, name, x, y, 328, 62, bg, colors);
  addIcon(button, iconType, 20, 13, 36, colors, fonts);
  addText(button, title, 78, 14, 220, 34, 24, fonts.bold, colors.black);
  return button;
}

function addButtonFrame(parent, name, x, y, width, height, fill, colors) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(width, height);
  frame.x = x;
  frame.y = y;
  frame.cornerRadius = 8;
  frame.fills = [{ type: "SOLID", color: fill }];
  frame.strokes = [{ type: "SOLID", color: colors.line }];
  frame.strokeWeight = 2;
  parent.appendChild(frame);
  return frame;
}

function addAudioCue(parent, label, phrase, x, y, colors, fonts) {
  const frame = addButtonFrame(parent, "audio_cue", x, y, 320, 46, colors.language, colors);
  addSpeaker(frame, 16, 12, 24, colors.black);
  addText(frame, label, 54, 8, 100, 16, 12, fonts.bold, colors.gray);
  addText(frame, phrase, 54, 23, 246, 18, 15, fonts.bold, colors.black);
  return frame;
}

function addToneCue(parent, label, phrase, toneColor, x, y, colors, fonts) {
  const frame = addButtonFrame(parent, "tone_cue", x, y, 320, 74, colors.language, colors);
  const dot = figma.createEllipse();
  dot.name = "tone_dot";
  dot.resize(34, 34);
  dot.x = 18;
  dot.y = 20;
  dot.fills = [{ type: "SOLID", color: toneColor }];
  frame.appendChild(dot);
  addSpeaker(frame, 68, 22, 28, colors.black);
  addText(frame, label, 108, 12, 180, 18, 13, fonts.bold, toneColor);
  addText(frame, phrase, 108, 36, 184, 22, 16, fonts.bold, colors.black);
}

function addLightSensorCard(parent, x, y, colors, fonts) {
  const frame = addButtonFrame(parent, "light_sensor_card", x, y, 320, 108, colors.sun, colors);
  addSunIcon(frame, 24, 24, colors);
  addText(frame, "Auto brightness", 80, 22, 210, 28, 22, fonts.bold, colors.black);
  addText(frame, "Uses outside light", 80, 58, 210, 24, 17, fonts.regular, colors.gray);
  addLightBars(frame, 244, 26, colors);
}

function addLightPill(parent, x, y, colors, fonts) {
  const frame = addButtonFrame(parent, "light_pill", x, y, 320, 36, colors.sun, colors);
  addSunIcon(frame, 14, 8, colors);
  addText(frame, "Brightness adjusts to outside light", 50, 8, 250, 20, 14, fonts.bold, colors.black);
}

function addLargeIconPanel(parent, iconType, x, y, bg, colors, fonts) {
  const panel = addButtonFrame(parent, "large_icon_panel", x, y, 176, 154, bg, colors);
  addIcon(panel, iconType, 30, 24, 116, colors, fonts);
  return panel;
}

function addIcon(parent, type, x, y, size, colors, fonts) {
  if (type === "rupee") {
    addRupeeIcon(parent, x, y, size, colors, fonts);
  } else if (type === "grievance") {
    addGrievanceIcon(parent, x, y, size, colors);
  } else if (type === "transfer") {
    addTransferIcon(parent, x, y, size, colors, fonts);
  } else if (type === "success") {
    addMiniSuccess(parent, x, y, size, colors);
  } else if (type === "fail") {
    addMiniFail(parent, x, y, size, colors);
  } else if (type === "back") {
    addBackIcon(parent, x, y, size, colors);
  }
}

function addRupeeIcon(parent, x, y, size, colors, fonts) {
  const circle = figma.createEllipse();
  circle.name = "rupee_circle";
  circle.resize(size, size);
  circle.x = x;
  circle.y = y;
  circle.fills = [{ type: "SOLID", color: colors.white }];
  circle.strokes = [{ type: "SOLID", color: colors.line }];
  circle.strokeWeight = Math.max(2, size / 24);
  parent.appendChild(circle);
  addText(parent, "₹", x + size * 0.31, y + size * 0.13, size * 0.5, size * 0.68, size * 0.62, fonts.bold, colors.black);
}

function addGrievanceIcon(parent, x, y, size, colors) {
  const doc = figma.createFrame();
  doc.name = "grievance_image_icon";
  doc.resize(size, size * 0.9);
  doc.x = x;
  doc.y = y + size * 0.04;
  doc.cornerRadius = 8;
  doc.fills = [{ type: "SOLID", color: colors.white }];
  doc.strokes = [{ type: "SOLID", color: colors.black }];
  doc.strokeWeight = Math.max(2, size / 18);
  parent.appendChild(doc);

  const face = figma.createEllipse();
  face.name = "sad_face";
  face.resize(size * 0.42, size * 0.42);
  face.x = size * 0.29;
  face.y = -size * 0.05;
  face.fills = [{ type: "SOLID", color: colors.white }];
  face.strokes = [{ type: "SOLID", color: colors.black }];
  face.strokeWeight = Math.max(2, size / 18);
  doc.appendChild(face);

  addSmallDot(doc, size * 0.41, size * 0.11, size * 0.045, colors.black);
  addSmallDot(doc, size * 0.56, size * 0.11, size * 0.045, colors.black);

  const mouth = figma.createLine();
  mouth.name = "sad_mouth";
  mouth.resize(size * 0.24, 0);
  mouth.x = size * 0.39;
  mouth.y = size * 0.29;
  mouth.rotation = -18;
  mouth.strokes = [{ type: "SOLID", color: colors.black }];
  mouth.strokeWeight = Math.max(2, size / 18);
  mouth.strokeCap = "ROUND";
  doc.appendChild(mouth);

  [0, 1, 2, 3].forEach((i) => {
    const line = figma.createLine();
    line.name = "complaint_line";
    line.resize(size * (i === 3 ? 0.5 : 0.68), 0);
    line.x = size * 0.18;
    line.y = size * (0.48 + i * 0.13);
    line.strokes = [{ type: "SOLID", color: colors.black }];
    line.strokeWeight = Math.max(2, size / 20);
    line.strokeCap = "ROUND";
    doc.appendChild(line);
  });
}

function addTransferIcon(parent, x, y, size, colors, fonts) {
  addRupeeIcon(parent, x, y + size * 0.08, size * 0.52, colors, fonts);
  const arrow = figma.createLine();
  arrow.name = "transfer_arrow";
  arrow.resize(size * 0.42, 0);
  arrow.x = x + size * 0.45;
  arrow.y = y + size * 0.44;
  arrow.strokes = [{ type: "SOLID", color: colors.black }];
  arrow.strokeWeight = Math.max(3, size / 18);
  arrow.strokeCap = "ARROW_EQUILATERAL";
  parent.appendChild(arrow);

  const home = figma.createFrame();
  home.name = "home_target";
  home.resize(size * 0.4, size * 0.34);
  home.x = x + size * 0.6;
  home.y = y + size * 0.45;
  home.cornerRadius = 5;
  home.fills = [{ type: "SOLID", color: colors.white }];
  home.strokes = [{ type: "SOLID", color: colors.black }];
  home.strokeWeight = Math.max(2, size / 24);
  parent.appendChild(home);

  const roof = figma.createPolygon();
  roof.name = "home_roof";
  roof.pointCount = 3;
  roof.resize(size * 0.46, size * 0.28);
  roof.x = x + size * 0.57;
  roof.y = y + size * 0.3;
  roof.rotation = 180;
  roof.fills = [{ type: "SOLID", color: colors.white }];
  roof.strokes = [{ type: "SOLID", color: colors.black }];
  roof.strokeWeight = Math.max(2, size / 24);
  parent.appendChild(roof);
}

function addMiniSuccess(parent, x, y, size, colors) {
  const circle = figma.createEllipse();
  circle.name = "success_icon";
  circle.resize(size, size);
  circle.x = x;
  circle.y = y;
  circle.fills = [{ type: "SOLID", color: colors.success }];
  parent.appendChild(circle);
  const line1 = figma.createLine();
  line1.name = "check_short";
  line1.resize(size * 0.28, 0);
  line1.x = x + size * 0.24;
  line1.y = y + size * 0.58;
  line1.rotation = 45;
  line1.strokes = [{ type: "SOLID", color: colors.white }];
  line1.strokeWeight = Math.max(3, size / 9);
  line1.strokeCap = "ROUND";
  parent.appendChild(line1);
  const line2 = figma.createLine();
  line2.name = "check_long";
  line2.resize(size * 0.46, 0);
  line2.x = x + size * 0.44;
  line2.y = y + size * 0.64;
  line2.rotation = -45;
  line2.strokes = [{ type: "SOLID", color: colors.white }];
  line2.strokeWeight = Math.max(3, size / 9);
  line2.strokeCap = "ROUND";
  parent.appendChild(line2);
}

function addMiniFail(parent, x, y, size, colors) {
  const stop = figma.createPolygon();
  stop.name = "fail_icon";
  stop.pointCount = 8;
  stop.resize(size, size);
  stop.x = x;
  stop.y = y;
  stop.fills = [{ type: "SOLID", color: colors.danger }];
  parent.appendChild(stop);
  const line1 = figma.createLine();
  line1.name = "x_line";
  line1.resize(size * 0.48, 0);
  line1.x = x + size * 0.26;
  line1.y = y + size * 0.28;
  line1.rotation = 45;
  line1.strokes = [{ type: "SOLID", color: colors.white }];
  line1.strokeWeight = Math.max(3, size / 9);
  line1.strokeCap = "ROUND";
  parent.appendChild(line1);
  const line2 = figma.createLine();
  line2.name = "x_line";
  line2.resize(size * 0.48, 0);
  line2.x = x + size * 0.26;
  line2.y = y + size * 0.72;
  line2.rotation = -45;
  line2.strokes = [{ type: "SOLID", color: colors.white }];
  line2.strokeWeight = Math.max(3, size / 9);
  line2.strokeCap = "ROUND";
  parent.appendChild(line2);
}

function addBackIcon(parent, x, y, size, colors) {
  const arrow = figma.createLine();
  arrow.name = "back_arrow";
  arrow.resize(size, 0);
  arrow.x = x + size;
  arrow.y = y + size / 2;
  arrow.rotation = 180;
  arrow.strokes = [{ type: "SOLID", color: colors.black }];
  arrow.strokeWeight = Math.max(3, size / 8);
  arrow.strokeCap = "ARROW_EQUILATERAL";
  parent.appendChild(arrow);
}

function addSuccessIcon(parent, x, y, colors) {
  addMiniSuccess(parent, x, y, 136, colors);
}

function addFailIcon(parent, x, y, colors) {
  addMiniFail(parent, x, y, 136, colors);
}

function addSpeaker(parent, x, y, size, color) {
  const body = figma.createPolygon();
  body.name = "speaker";
  body.pointCount = 3;
  body.resize(size * 0.5, size * 0.64);
  body.x = x + size * 0.05;
  body.y = y + size * 0.18;
  body.rotation = 90;
  body.fills = [{ type: "SOLID", color }];
  parent.appendChild(body);
  const wave1 = figma.createLine();
  wave1.name = "speaker_wave";
  wave1.resize(size * 0.28, 0);
  wave1.x = x + size * 0.54;
  wave1.y = y + size * 0.38;
  wave1.rotation = 30;
  wave1.strokes = [{ type: "SOLID", color }];
  wave1.strokeWeight = Math.max(2, size / 12);
  wave1.strokeCap = "ROUND";
  parent.appendChild(wave1);
  const wave2 = figma.createLine();
  wave2.name = "speaker_wave";
  wave2.resize(size * 0.28, 0);
  wave2.x = x + size * 0.54;
  wave2.y = y + size * 0.62;
  wave2.rotation = -30;
  wave2.strokes = [{ type: "SOLID", color }];
  wave2.strokeWeight = Math.max(2, size / 12);
  wave2.strokeCap = "ROUND";
  parent.appendChild(wave2);
}

function addSunIcon(parent, x, y, colors) {
  const sun = figma.createEllipse();
  sun.name = "sun_icon";
  sun.resize(18, 18);
  sun.x = x;
  sun.y = y;
  sun.fills = [{ type: "SOLID", color: colors.sun }];
  sun.strokes = [{ type: "SOLID", color: colors.black }];
  sun.strokeWeight = 1.5;
  parent.appendChild(sun);
}

function addLightBars(parent, x, y, colors) {
  [0, 1, 2].forEach((i) => {
    const bar = figma.createRectangle();
    bar.name = "light_bar";
    bar.resize(12, 22 + i * 16);
    bar.x = x + i * 20;
    bar.y = y + 48 - i * 16;
    bar.cornerRadius = 4;
    bar.fills = [{ type: "SOLID", color: colors.black }];
    parent.appendChild(bar);
  });
}

function addChevron(parent, x, y, color) {
  const line1 = figma.createLine();
  line1.name = "chevron";
  line1.resize(18, 0);
  line1.x = x;
  line1.y = y;
  line1.rotation = 45;
  line1.strokes = [{ type: "SOLID", color }];
  line1.strokeWeight = 4;
  line1.strokeCap = "ROUND";
  parent.appendChild(line1);
  const line2 = figma.createLine();
  line2.name = "chevron";
  line2.resize(18, 0);
  line2.x = x;
  line2.y = y + 25;
  line2.rotation = -45;
  line2.strokes = [{ type: "SOLID", color }];
  line2.strokeWeight = 4;
  line2.strokeCap = "ROUND";
  parent.appendChild(line2);
}

function addSmallDot(parent, x, y, size, color) {
  const dot = figma.createEllipse();
  dot.name = "dot";
  dot.resize(size, size);
  dot.x = x;
  dot.y = y;
  dot.fills = [{ type: "SOLID", color }];
  parent.appendChild(dot);
}

function addText(parent, characters, x, y, width, height, size, fontName, color) {
  const text = figma.createText();
  text.name = "text";
  text.x = x;
  text.y = y;
  text.resize(width, height);
  text.fontName = fontName;
  text.fontSize = size;
  text.lineHeight = { unit: "PERCENT", value: 120 };
  text.letterSpacing = { unit: "PIXELS", value: 0 };
  text.fills = [{ type: "SOLID", color }];
  text.characters = characters;
  parent.appendChild(text);
  return text;
}

async function linkByName(root, nodeName, destinationId) {
  const node = root.findOne((child) => child.name === nodeName);
  if (!node || !("setReactionsAsync" in node)) return;
  await node.setReactionsAsync([
    {
      trigger: { type: "ON_CLICK" },
      actions: [
        {
          type: "NODE",
          destinationId,
          navigation: "NAVIGATE",
          transition: {
            type: "SMART_ANIMATE",
            easing: { type: "EASE_OUT" },
            duration: 0.2
          },
          resetScrollPosition: true
        }
      ]
    }
  ]);
}

function rgb(r, g, b) {
  return { r: r / 255, g: g / 255, b: b / 255 };
}

main();
