
# Student Management App

A simple student management application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- View all students
- Search students by name
- Filter students by department
- View student profiles
- View departments and their students
- About page
- Custom 404 Not Found page

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
app/
  page.tsx
  about/
    page.tsx
  departments/
    page.tsx
    [department]/
      page.tsx
  students/
    [id]/
      page.tsx
  not-found.tsx

components/
  studentCard.tsx

data/
  studentData.ts

types/
  student.ts
```

