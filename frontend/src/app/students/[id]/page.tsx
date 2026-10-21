
import Image from "next/image";
import Link from "next/link";
import { students } from "@/data/studentData";

export default async function StudentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <div className="p-6">
      <Link href="/">Back to students</Link>

      <div className="mt-4">
        <Image
          src={student.image}
          alt={student.name}
          width={100}
          height={100}
          className="rounded-full"
          unoptimized
        />

        <h1 className="mt-4 text-2xl font-bold">
          {student.name}
        </h1>

        <p>ID: {student.studentId}</p>
        <p>Email: {student.email}</p>
        <p>Gender: {student.gender}</p>
        <p>Course: {student.course}</p>
        <p>Department: {student.department}</p>
        <p>Year: {student.yearOfStudy}</p>
        <p>Semester: {student.semester}</p>
        <p>GPA: {student.gpa}</p>
        <p>Skills: {student.skills.join(", ")}</p>
        <p>Enrollment: {student.enrollmentDate}</p>
      </div>
    </div>
  );
}
