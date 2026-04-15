# 🫀 Kardiologie — Mein Lernprojekt

Ein persönliches Lernprojekt für Kardiologie — Echokardiographie, Doppler, und persönliche Notizen.

**Sprachen:** Deutsch 🇩🇪 + Darija 🇩🇿

## 📁 Struktur

```
kardiologie/
├── index.html           ← Startseite / Dashboard
├── echo/
│   └── index.html       ← Echokardiographie-Kurs (22 Kapitel)
├── doppler/
│   └── index.html       ← Doppler Guide
├── notes/
│   └── index.html       ← Persönliche Notizen (mit Fotos & Effekten)
└── assets/
    └── nav.js           ← Globale Navigation
```

## 🚀 GitHub Pages — Schritt für Schritt

### 1. GitHub-Konto erstellen
→ https://github.com/join

### 2. Neues Repository erstellen
- Auf github.com: "New repository" klicken
- Name: `kardiologie` (oder beliebig)
- **Public** auswählen (für GitHub Pages kostenlos)
- "Create repository" klicken

### 3. Dateien hochladen
- Im neuen Repository: "Upload files" klicken
- Alle Dateien aus diesem Ordner hochladen (Struktur beibehalten!)
- "Commit changes" klicken

### 4. GitHub Pages aktivieren
- Repository → Settings → Pages
- Source: "Deploy from a branch"
- Branch: `main` / Ordner: `/(root)`
- "Save" klicken

### 5. Website aufrufen
Nach 1-2 Minuten erreichbar unter:
```
https://DEIN-USERNAME.github.io/kardiologie/
```

## ✏️ Notizen-System

Die Notizen werden direkt im Browser gespeichert (localStorage).
- ✅ Text auf Deutsch
- 🇩🇿 Darija-Feld optional
- 📷 Fotos hochladen
- 🎨 7 Hintergrundfarben
- ✨ 5 Effekte (Wichtig, Kritisch, Hervorheben, Favorit, Erledigt)
- 🏷️ Kategorien: Echo, Doppler, EKG, Klinik, Darija

## 📝 Neue Kapitel hinzufügen

Einfach neue HTML-Dateien in neue Ordner legen und im `nav.js` verlinken.
