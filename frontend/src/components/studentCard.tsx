
import Image from "next/image";
import Link from "next/link";
import type { Student } from "@/types/student";

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between">
        <Image
          src={student.image}
          alt={student.name}
          width={40}
          height={40}
          className="rounded-full"
          unoptimized
        />

        <span>{student.studentId}</span>
      </div>

      <h2 className="mt-2 text-lg font-medium">{student.name}</h2>

      <p>{student.department}</p>
      <p>Year {student.yearOfStudy}</p>

      <Link
        href={`/students/${student.id}`}
        className="text-blue-600"
      >
        View profile
      </Link>
    </div>
  );
}
