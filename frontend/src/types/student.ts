
export interface Student {
  id: number;
  studentId: string;
  name: string;
  email: string;
  image: string;
  gender: "Male" | "Female" | "Other";
  yearOfStudy: 1 | 2 | 3 | 4;
  course: string;
  department: string;
  semester: number;
  gpa: number;
  skills: string[];
  enrollmentDate: string;
}