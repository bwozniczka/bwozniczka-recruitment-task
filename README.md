# Zadanie rekrutacyjne — Data Visualization

Projekt wizualizacji danych e-commerce przy użyciu React, TypeScript i Highcharts.

## Technologie

- **React**
- **TypeScript**
- **Vite**
- **Highcharts**

## Wymagania

- **Node.js**
- **npm**

**Alternatywnie:**

- **Docker**

## Uruchomienie projektu

### Lokalnie

1. Zainstaluj zależności:

```bash
npm install
```

2. Uruchom serwer deweloperski:

```bash
npm run dev
```

3. Otwórz przeglądarkę pod adresem: `http://localhost:5173`

### Docker

1. Zbuduj obraz Docker:

```bash
docker build -t recruitment-task .
```

2. Uruchom kontener:

```bash
docker run -p 5173:5173 recruitment-task
```

3. Otwórz przeglądarkę pod adresem: `http://localhost:5173`

## Struktura projektu

```
src/
  ├── data/
  │   └── data.json              # Dane zamówień e-commerce
  ├── components/
  │   ├── DeviceUsageChart.tsx   # Wykres użycia urządzeń
  │   ├── CustomerTypeChart.tsx  # Wykres wartości zamówień w czasie
  │   └── RevenueByCountryChart.tsx # Wykres przychodów i czasu dostawy
  ├── App.tsx                    # Główny komponent z layoutem dashboardu
  ├── App.css                    # Style komponentów i wykresów
  ├── index.css                  # Style globalne
  └── main.tsx                   # Punkt wejścia aplikacji
```

## Opis rozwiązania

### Kluczowe dane

Jako kluczowe dane wybrałem przede wszystkim **dochód ze sprzedaży**, **kraje** oraz **kategorie produktów**. Skupiłem się też na **rodzajach urządzeń**, **typach użytkowników** (nowi vs. powracający), **czasie/dacie zamówień** oraz **czasie dostawy**, aby bardziej oddać przekrój rynku dla działalności e-commerce i umożliwić analizę trendów czasowych oraz efektywności operacyjnej.

### Wizualizacje

Dashboard prezentuje dane za pomocą 3 wykresów:

#### 1. Przychody i czas dostawy według krajów (Stacked Column + Line Chart)

Wykres ten powstał, aby pokazać ogólny zarys rynku. Za jego pomocą widzimy:

- **Przychód z produktów** podzielony na kategorie (stacked columns)
- **Średni czas oczekiwania** na zamówienie dla każdego kraju (linia)

Wykres słupkowy skumulowany został użyty, aby łatwo dało się zobaczyć rozłożenie procentowe poszczególnych kategorii produktów. Dzięki dodaniu linii przedstawiającej czas dostawy mamy pełny pogląd na kluczowe aspekty działalności - zarówno przychody, jak i efektywność logistyczną.

**Kluczowe insights:**

- Które kraje generują największe przychody
- Jakie kategorie dominują w poszczególnych krajach
- Czy długi czas dostawy koreluje z przychodami

#### 2. Rozkład zamówień według urządzeń (Donut Chart)

Wykres przedstawia przekrój urządzeń, z jakich korzystają nasi użytkownicy. W tooltipie mamy też całkowity przychód z konkretnego urządzenia.

Ten wykres pozwala łatwo zobaczyć:

- Które urządzenia są najpopularniejsze
- Gdzie można przyciągnąć więcej klientów
- Jak dostosować UX pod konkretne platformy

#### 3. Wartość zamówień w czasie (Scatter Chart)

Na tym wykresie widzimy rozkład zamówień w czasie z podziałem na **nowych** i **powracających użytkowników** wraz z wartością ich zamówień.

**Segmentacja wizualna:**

- Nowi użytkownicy - niebieskie okręgi
- Powracający użytkownicy - zielone diamenty

Taki wykres pozwoli zbadać naszych użytkowników i znaleźć ciekawe trendy:

- Czy powracający klienci składają większe zamówienia?
- W jakich okresach mamy wzrost nowych klientów?
- Czy istnieją sezonowe wzorce zakupowe?
- Jak dostosować ofertę właśnie pod zachowania obu grup klientów?
