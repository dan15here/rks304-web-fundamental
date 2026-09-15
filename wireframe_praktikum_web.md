# Profile Website Wireframe & Visual Layout Plan (ASCII Art)

This document provides a detailed layout, visual hierarchy, and structural component guide for the Lab Assignment 1: HTML & Vanilla CSS.

---

## 1. Main Page: `index.html` (Home / Overview)

This page serves as a personal introduction, technical skill summary, and background overview.

```text
+-----------------------------------------------------------------------+
|  [LOGO / INITIALS]                     [Home]   [Portfolio]   [Contact]| <- Header & Nav
+-----------------------------------------------------------------------+
|                                                                       |
|  +-------------------+   Hello, I'm                                   |
|  |                   |   Full Name                                    |
|  |  [PROFILE PHOTO]  |   Cyber Security & IT Student                  | <- Hero Section
|  |     (Avatar)      |   ------------------------------------------   |
|  |                   |   Focused on web security, system administration|
|  +-------------------+   and network infrastructure lab setups.       |
|                          [View Portfolio]    [Contact Me]             |
|                                                                       |
+-----------------------------------------------------------------------+
|                          ABOUT & SKILLS                               |
|                                                                       |
|  +---------------------------------++---------------------------------+
|  | Education & Experience          || Technical Skill Badges          |
|  +---------------------------------++---------------------------------+
|  | - Cyber Security Engineering    || [ Network Admin ] [ Python ]    |
|  |   Politeknik Negeri Batam       || [ Linux CLI ]     [ Git ]       |
|  |                                 || [ Cryptography ]  [ Docker ]    |
|  | - Computer & Network Eng. (TKJ) || [ Web Security ]  [ HTML/CSS ]  |
|  |   Vocational High School        ||                                 |
|  |                                 ||                                 |
|  | - Practical Background          || CSS Tip:                        |
|  |   IT Support & Lab Sysadmin     || Use flex-wrap & pill badges     |
|  +---------------------------------++---------------------------------+
|                                                                       |
+-----------------------------------------------------------------------+
|  (c) 2026 Full Name - Built with Semantic HTML & Vanilla CSS          | <- Footer
+-----------------------------------------------------------------------+
```

---

## 2. Portfolio Page: `portfolio.html` (Projects & Works)

This page uses a card grid layout to showcase technical projects, software experiments, and research.

```text
+-----------------------------------------------------------------------+
|  [LOGO / INITIALS]                     [Home]   [Portfolio]   [Contact]| <- Header & Nav
+-----------------------------------------------------------------------+
|                                                                       |
|                             PROJECT SHOWCASE                          |
|         Collection of technical projects, research, and tools        |
|                                                                       |
|  +-----------------------------+     +-----------------------------+  |
|  | [PROJECT THUMBNAIL/PREVIEW] |     | [PROJECT THUMBNAIL/PREVIEW] |  |
|  | +-------------------------+ |     | +-------------------------+ |  |
|  | |      Image / Icon       | |     | |      Image / Icon       | |  |
|  | +-------------------------+ |     | +-------------------------+ |  |
|  | PyVault - Password Manager  |     | Network Lab Topology Setup  |  |
|  | CLI app for local data      |     | Secured virtual network lab |  |
|  | encryption via Argon2 & DB. |     | setup using WireGuard & OS. |  |
|  |                             |     |                             |  |
|  | Tags: [Python] [Security]   |     | Tags: [Networking] [Linux]  |  |
|  | [GitHub Repo] [Live Demo]   |     | [Documentation] [Topology]  |  |
|  +-----------------------------+     +-----------------------------+  |
|                                                                       |
|  +-----------------------------+     +-----------------------------+  |
|  | [PROJECT THUMBNAIL/PREVIEW] |     | [PROJECT THUMBNAIL/PREVIEW] |  |
|  | +-------------------------+ |     | +-------------------------+ |  |
|  | |      Image / Icon       | |     | |      Image / Icon       | |  |
|  | +-------------------------+ |     | +-------------------------+ |  |
|  | Web Vulnerability Scanner   |     | Hardware Serial Integration |  |
|  | Automated auditing module   |     | Integration scripts for data|  |
|  | for web security checks.    |     | acquisition & serial reading|  |
|  |                             |     |                             |  |
|  | Tags: [Bash] [Security]     |     | Tags: [Hardware] [Python]   |  |
|  | [Source Code]               |     | [View Notes]                |  |
|  +-----------------------------+     +-----------------------------+  |
|                                                                       |
+-----------------------------------------------------------------------+
|  (c) 2026 Full Name - Built with Semantic HTML & Vanilla CSS          | <- Footer
+-----------------------------------------------------------------------+
```

---

## 3. Contact Page: `contact.html` (Form & Collaboration)

An interactive contact form featuring clear top labels, a dropdown for inquiry categories, and a multi-line message area.

```text
+-----------------------------------------------------------------------+
|  [LOGO / INITIALS]                     [Home]   [Portfolio]   [Contact]| <- Header & Nav
+-----------------------------------------------------------------------+
|                                                                       |
|                       GET IN TOUCH & COLLABORATE                      |
|          Feel free to send a message for inquiries or projects        |
|                                                                       |
|                +------------------------------------+                 |
|                | Contact Form                       |                 |
|                |                                    |                 |
|                | Full Name *                        |                 |
|                | [ Enter your full name...        ] |                 |
|                |                                    |                 |
|                | Email Address *                    |                 |
|                | [ name@domain.com                ] |                 |
|                |                                    |                 |
|                | Category / Inquiry *               |                 |
|                | [ [v] Project Collaboration      ] |                 |
|                |   * Consultation                   |                 |
|                |   * Project Collaboration          |                 |
|                |   * General Question               |                 |
|                |                                    |                 |
|                | Message *                          |                 |
|                | +--------------------------------+ |                 |
|                | | Write your message details     | |                 |
|                | | clearly here...                | |                 |
|                | |                                | |                 |
|                | +--------------------------------+ |                 |
|                |                                    |                 |
|                | [     SEND MESSAGE (Submit)    ]   |                 |
|                +------------------------------------+                 |
|                                                                       |
+-----------------------------------------------------------------------+
|  (c) 2026 Full Name - Built with Semantic HTML & Vanilla CSS          | <- Footer
+-----------------------------------------------------------------------+
```

---

## Semantic Tag & CSS Layout Strategy Guide

| Page | Key Semantic Structure | Recommended CSS Layout Strategy |
| :--- | :--- | :--- |
| **Global Header & Nav** | `<header>`, `<nav>`, `<footer>` | `display: flex; justify-content: space-between; align-items: center;` |
| **index.html** | `<section class="hero">`, `<section class="about-skills">` | Hero: 2-column layout (Flexbox/Grid), Skill Tags: `display: flex; flex-wrap: wrap; gap: 8px;` |
| **portfolio.html** | `<section class="project-grid">`, `<article class="card">` | `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;` |
| **contact.html** | `<main>`, `<form>`, `<label>`, `<input>`, `<select>`, `<button>` | Form Container: `max-width: 520px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px;` |
