import Link from "next/link";
import { students } from "@/data/studentData";

export default function DepartmentsPage() {
  const departments = [...new Set(students.map((s) => s.department))];

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Departments</h1>

      {departments.map((department) => (
        <div key={department} className="mb-4 rounded-lg border p-4">
          <h2 className="font-semibold">{department}</h2>

          <p>
            Students: {students.filter((s) => s.department === department).length}
          </p>

          <Link
            href={`/departments/${encodeURIComponent(department)}`}
            className="text-blue-600"
          >
            View Students
          </Link>
        </div>
      ))}
    </div>
  );
}