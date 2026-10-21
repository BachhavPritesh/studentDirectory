"use client";
// "use client";


// import { useState } from "react";
// import StudentCard from "@/components/studentCard";
// import { students } from "@/data/studentData";

// export default function Home() {
//   const [search, setSearch] = useState("");

//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="m-10">
//       <h1 className="text-4xl text-blue-500">Students</h1>

//       <p className="text-gray-500">
//         Browse students and view their profiles
//       </p>

//       <input
//         type="text"
//         placeholder="Search by student name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mt-4 w-full rounded-lg border p-3"
//       />

//       <div className="mt-4 flex flex-wrap gap-4">
//         {filteredStudents.length > 0 ? (
//           filteredStudents.map((student) => (
//             <StudentCard key={student.id} student={student} />
//           ))
//         ) : (
//           <p className="text-gray-500">No students found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import StudentCard from "@/components/studentCard";
import { students } from "@/data/studentData";

export default function Home() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    ...new Set(students.map((student) => student.department)),
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (department === "All" || student.department === department)
  );

  return (
    <div className="m-10">
      <h1 className="text-4xl text-blue-500">Students</h1>

      <p className="text-gray-500">
        Browse students and view their profiles
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search by student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="All">All Departments</option>

          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-gray-500">
        Students found: {filteredStudents.length}
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <p className="text-gray-500">No students found.</p>
        )}
      </div>
    </div>
  );
}

