
import Link from "next/link";
import { students } from "@/data/studentData";
import StudentCard from "@/components/studentCard";

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;

  const departmentStudents = students.filter(
    (student) =>
      student.department.toLowerCase() === department.toLowerCase()
  );

  return (
    <div className="p-6">
      <Link href="/departments">Back to departments</Link>

      <h1 className="my-4 text-2xl font-bold">{department}</h1>

      {departmentStudents.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departmentStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}
