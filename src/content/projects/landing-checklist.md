---
title: "/landing-checklist — The Clarity-First Framework"
category: "Agent Skill"
section: "projects"
date: "2026-08-24"
description: "4 fundamental design principles and strict checkup framework for high-converting, blazing-fast landing pages."
tags: ["Landing Page", "UX Audit", "CRO", "Performance", "Web Design", "Clarity-First"]
---

# /landing-checklist — The Clarity-First Framework

The **`/landing-checklist`** agent skill enforces **The Clarity-First Framework** — translating raw UX metrics into 4 strict product mandates for frontend engineering and UI/UX design.

---

## 💎 Core Philosophy: Don't Design for Designers

Most landing pages fail not from a lack of visual effects, but from cognitive overload, slow mobile loading, broken native interactions, and decorative noise that distracts from the core value proposition. 

The Clarity-First Framework establishes 4 non-negotiable principles:

---

## 🏛️ The 4 Fundamental Design Principles

### 01. Мгновенное считывание смыслов (5-Second Clarity)
* **Принцип:** Интерфейс обязан отвечать на вопросы *«Что это такое?»* и *«Что мне сделать?»* в первые 5 секунд контакта без необходимости скролла или глубокого вчитывания.
* **Правило реализации:** Полный запрет на абстрактный маркетинговый копирайтинг (*«Мы меняем парадигму будущего»*). Только прямой, честный **Value Proposition** и сфокусированный первичный **CTA**.
* **Диагностическая метрика:** Успешный проход 5-секундного юзабилити-теста (**Pass Rate > 90%**) среди холодной аудитории.
* **Эффект:** Полная ликвидация мгновенных отказов (*bounce rate*) и когнитивного замешательства при первом входе.

### 02. Жесткий бюджет производительности на Mobile (Mobile Performance Budget)
* **Принцип:** Скорость загрузки и отзывчивость — это фундаментальный элемент UX. Дизайн не считается готовым, пока он не оптимизирован под ограничения мобильных сетей и мобильного железа.
* **Правило реализации:** Введение лимитов на размер ассетов, JS-скриптов, вес DOM-дерева и блокирующие рендер ресурсы для мобильных вьюпортов.
* **Диагностическая метрика:** **LCP (Largest Contentful Paint) < 2.5s**, суммарное время загрузки страницы **< 1.5s на 4G**.
* **Эффект:** Защита продукта от потери конверсии (исключение 78% падения выручки из-за задержек загрузки > 4 сек).

### 03. Уважение к паттернам ОС и браузера (Native UX Integrity)
* **Принцип:** Интерфейс не должен ломать предсказуемые ментальные модели пользователей и базовое поведение платформы ради эстетических экспериментов.
* **Правило реализации:** Полный запрет на перехват скролла (*scrolljacking*), кастомные кривые инерции страницы и блокировку нативных элементов ввода. Обязательная поддержка навигации с клавиатуры и стандартов доступности **WCAG**.
* **Диагностическая метрика:** **0 случаев перехвата скролла**; 100% валидация по стандартам accessibility.
* **Эффект:** Снижение интерактивного трения и исключение пространственной дезориентации пользователя.

### 04. Целевая визуальная иерархия (Outcome-Driven Hierarchy)
* **Принцип:** Каждый UI-элемент, блок текста, паттерн или анимация обязаны работать либо на совершение коммерческого действия, либо на укрепление доверия (*social proof*).
* **Правило реализации:** Исключение визуального шума и декоративных графических ассетов, не несущих смысловой нагрузки. Любой вектор внимания ведет к конверсионному шагу.
* **Диагностическая метрика:** **100% визуальных элементов** явно привязаны к сценарию конверсии или доверительному социальному доказательству.
* **Эффект:** Прямая трансформация входящего трафика в лиды, продажи и бизнес-результат.

---

## 📐 16:9 Vector Architecture Matrix

```
[01 5-Second Clarity] ────> [02 Mobile Budget] ────> [03 Native Integrity] ────> [04 Outcome Hierarchy]
  Direct Value Prop           LCP < 2.5s / 4G          0 Scrolljacking             Every Pixel -> CTA
  Single Focused CTA          Asset & DOM Caps         WCAG & Keyboard Nav         Social Proof Grounding
```

---

## ⚙️ Operational Invariants & SDD Specification

1. **Anti-Abstraction Invariant:** Никаких расплывчатых слоганов в Hero-секции. Заголовок должен четко называть инструмент/продукт и его результат.
2. **Performance Hard Cap:** Мобильный бандл и изображения должны укладываться в строгий бюджет LCP < 2.5s.
3. **Native Behavior Guarantee:** Скролл всегда нативный. Мобильные жесты и клавиатурный фокус работают предсказуемо.
4. **Outcome Alignment:** Все кнопки, бейджи, карточки и отзывы ведут пользователя по воронке конверсии.
