document.addEventListener("DOMContentLoaded", function () {
  // Sample data
  const users = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      role: "طالب",
      status: "نشط",
    },
    {
      id: 2,
      name: "سارة علي",
      email: "sara@example.com",
      role: "مدرب",
      status: "نشط",
    },
    {
      id: 3,
      name: "محمد خالد",
      email: "mohamed@example.com",
      role: "طالب",
      status: "غير نشط",
    },
    {
      id: 4,
      name: "فاطمة أحمد",
      email: "fatima@example.com",
      role: "مدرب",
      status: "نشط",
    },
    {
      id: 5,
      name: "عمر حسن",
      email: "omar@example.com",
      role: "طالب",
      status: "نشط",
    },
  ];

  const instructors = [
    {
      id: 1,
      name: "سارة علي",
      email: "sara@example.com",
      specialty: "البرمجة",
      courses: 3,
      status: "نشط",
    },
    {
      id: 2,
      name: "فاطمة أحمد",
      email: "fatima@example.com",
      specialty: "التصميم",
      courses: 2,
      status: "نشط",
    },
    {
      id: 3,
      name: "محمد خالد",
      email: "mohamed.k@example.com",
      specialty: "التسويق",
      courses: 1,
      status: "غير نشط",
    },
    {
      id: 4,
      name: "أحمد علي",
      email: "ahmed.ali@example.com",
      specialty: "إدارة الأعمال",
      courses: 4,
      status: "نشط",
    },
    {
      id: 5,
      name: "نورا حسن",
      email: "noura@example.com",
      specialty: "اللغات",
      courses: 2,
      status: "نشط",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "أساسيات البرمجة بلغة جافا",
      instructor: "سارة علي",
      duration: "8 أسابيع",
      students: 45,
      status: "معتمد",
      description:
        "دورة شاملة لتعلم أساسيات البرمجة باستخدام لغة جافا من الصفر للاحتراف",
      category: "البرمجة",
      level: "مبتدئ",
      price: 1200,
      mentors: [
        { id: 1, name: "أحمد علي", image: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "محمد خالد", image: "https://i.pravatar.cc/150?img=2" },
      ],
    },
    {
      id: 2,
      title: "تطوير تطبيقات الويب",
      instructor: "فاطمة أحمد",
      duration: "10 أسابيع",
      students: 32,
      status: "قيد المراجعة",
      description:
        "تعلم تطوير تطبيقات الويب باستخدام HTML, CSS, JavaScript وإطار العمل React",
      category: "تطوير الويب",
      level: "متوسط",
      price: 1500,
      mentors: [
        { id: 3, name: "سارة علي", image: "https://i.pravatar.cc/150?img=5" },
      ],
    },
    {
      id: 3,
      title: "الذكاء الاصطناعي للمبتدئين",
      instructor: "سارة علي",
      duration: "12 أسبوع",
      students: 28,
      status: "معتمد",
      description: "مقدمة في الذكاء الاصطناعي وتعلم الآلة مع تطبيقات عملية",
      category: "الذكاء الاصطناعي",
      level: "مبتدئ",
      price: 1800,
      mentors: [
        { id: 4, name: "عمر حسن", image: "https://i.pravatar.cc/150?img=3" },
        { id: 5, name: "نورا حسن", image: "https://i.pravatar.cc/150?img=4" },
      ],
    },
    {
      id: 4,
      title: "تصميم واجهات المستخدم",
      instructor: "محمد خالد",
      duration: "6 أسابيع",
      students: 15,
      status: "قيد المراجعة",
      description: "تعلم أساسيات تصميم واجهات المستخدم وتجربة المستخدم",
      category: "التصميم",
      level: "مبتدئ",
      price: 900,
      mentors: [],
    },
    {
      id: 5,
      title: "قواعد البيانات المتقدمة",
      instructor: "فاطمة أحمد",
      duration: "8 أسابيع",
      students: 22,
      status: "معتمد",
      description: "دورة متقدمة في قواعد البيانات وSQL وNoSQL",
      category: "قواعد البيانات",
      level: "متقدم",
      price: 1600,
      mentors: [
        { id: 1, name: "أحمد علي", image: "https://i.pravatar.cc/150?img=1" },
      ],
    },
  ];

  // Navigation - Smooth scroll to sections
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: "smooth",
        });

        // Update active state
        navLinks.forEach((navLink) => {
          navLink.parentElement.classList.remove("active");
        });
        this.parentElement.classList.add("active");
      }
    });
  });

  // Populate users table
  const usersTableBody = document.getElementById("usersTableBody");
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><span class="status-badge ${
            user.status === "نشط" ? "status-active" : "status-inactive"
          }">${user.status}</span></td>
          <td>
              <div class="action-buttons">
                  <button class="action-btn view-btn" data-id="${
                    user.id
                  }"><i class="fas fa-eye"></i></button>
                  <button class="action-btn edit-btn" data-id="${
                    user.id
                  }"><i class="fas fa-edit"></i></button>
                  <button class="action-btn delete-btn" data-id="${
                    user.id
                  }"><i class="fas fa-trash"></i></button>
              </div>
          </td>
      `;
    usersTableBody.appendChild(row);
  });

  // Populate instructors table
  const instructorsTableBody = document.getElementById("instructorsTableBody");
  instructors.forEach((instructor) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${instructor.name}</td>
          <td>${instructor.email}</td>
          <td>${instructor.specialty}</td>
          <td>${instructor.courses}</td>
          <td><span class="status-badge ${
            instructor.status === "نشط" ? "status-active" : "status-inactive"
          }">${instructor.status}</span></td>
          <td>
              <div class="action-buttons">
                  <button class="action-btn view-btn" data-id="${
                    instructor.id
                  }" data-type="instructor"><i class="fas fa-eye"></i></button>
                  <button class="action-btn edit-btn" data-id="${
                    instructor.id
                  }" data-type="instructor"><i class="fas fa-edit"></i></button>
                  <button class="action-btn delete-btn" data-id="${
                    instructor.id
                  }" data-type="instructor"><i class="fas fa-trash"></i></button>
              </div>
          </td>
      `;
    instructorsTableBody.appendChild(row);
  });

  // Populate courses table
  const coursesTableBody = document.getElementById("coursesTableBody");
  courses.forEach((course) => {
    const row = document.createElement("tr");
    let statusClass = "";
    if (course.status === "معتمد") statusClass = "status-approved";
    else if (course.status === "قيد المراجعة") statusClass = "status-pending";
    else if (course.status === "مرفوض") statusClass = "status-rejected";

    row.innerHTML = `
          <td>${course.title}</td>
          <td>${course.instructor}</td>
          <td>${course.duration}</td>
          <td>${course.students}</td>
          <td><span class="status-badge ${statusClass}">${
      course.status
    }</span></td>
          <td>
              <div class="action-buttons">
                  <button class="action-btn view-btn" data-id="${
                    course.id
                  }" data-type="course"><i class="fas fa-eye"></i></button>
                  ${
                    course.status === "قيد المراجعة"
                      ? `
                      <button class="action-btn approve-btn" data-id="${course.id}"><i class="fas fa-check"></i></button>
                      <button class="action-btn reject-btn" data-id="${course.id}"><i class="fas fa-times"></i></button>
                  `
                      : `
                      <button class="action-btn edit-btn" data-id="${course.id}" data-type="course"><i class="fas fa-edit"></i></button>
                  `
                  }
              </div>
          </td>
      `;
    coursesTableBody.appendChild(row);
  });

  // Initialize charts
  initializeCharts();

  // Invite Instructor Modal
  const inviteInstructorModal = document.getElementById(
    "inviteInstructorModal"
  );
  const inviteInstructorBtn = document.getElementById("inviteInstructorBtn");
  const inviteInstructorForm = document.getElementById("inviteInstructorForm");

  inviteInstructorBtn.addEventListener("click", () => {
    inviteInstructorModal.style.display = "flex";
  });

  inviteInstructorForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("instructorEmail").value;
    const specialty = document.getElementById("instructorSpecialty").value;
    const message = document.getElementById("instructorMessage").value;

    try {
      // Here you would typically send this data to your API
      console.log("Inviting instructor:", { email, specialty, message });

      // Add to the instructors table for demo
      const newInstructor = {
        id: instructors.length + 1,
        name: email.split("@")[0], // Temporary name from email
        email,
        specialty: getSpecialtyInArabic(specialty),
        courses: 0,
        status: "غير نشط",
      };

      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${newInstructor.name}</td>
              <td>${newInstructor.email}</td>
              <td>${newInstructor.specialty}</td>
              <td>${newInstructor.courses}</td>
              <td><span class="status-badge status-inactive">${newInstructor.status}</span></td>
              <td>
                  <div class="action-buttons">
                      <button class="action-btn view-btn" data-id="${newInstructor.id}" data-type="instructor"><i class="fas fa-eye"></i></button>
                      <button class="action-btn edit-btn" data-id="${newInstructor.id}" data-type="instructor"><i class="fas fa-edit"></i></button>
                      <button class="action-btn delete-btn" data-id="${newInstructor.id}" data-type="instructor"><i class="fas fa-trash"></i></button>
                  </div>
              </td>
          `;
      instructorsTableBody.appendChild(row);

      // Reset form and close modal
      inviteInstructorForm.reset();
      inviteInstructorModal.style.display = "none";

      // Show success message
      alert(`تم إرسال دعوة للمدرب على البريد الإلكتروني: ${email}`);
    } catch (error) {
      console.error("Error inviting instructor:", error);
      alert("حدث خطأ أثناء إرسال الدعوة. يرجى المحاولة مرة أخرى.");
    }
  });

  function getSpecialtyInArabic(specialty) {
    const specialties = {
      programming: "البرمجة",
      design: "التصميم",
      marketing: "التسويق",
      business: "إدارة الأعمال",
      languages: "اللغات",
    };
    return specialties[specialty] || specialty;
  }

  // Add User Modal
  const addUserModal = document.getElementById("addUserModal");
  const addUserBtn = document.getElementById("addUserBtn");
  const addUserForm = document.getElementById("addUserForm");

  addUserBtn.addEventListener("click", () => {
    addUserModal.style.display = "flex";
  });

  addUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const role = document.getElementById("userRole").value;

    try {
      // Here you would typically send this data to your API
      console.log("Adding user:", { name, email, role });

      // Add to the users table for demo
      const newUser = {
        id: users.length + 1,
        name,
        email,
        role: getRoleInArabic(role),
        status: "نشط",
      };

      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${newUser.name}</td>
              <td>${newUser.email}</td>
              <td>${newUser.role}</td>
              <td><span class="status-badge status-active">${newUser.status}</span></td>
              <td>
                  <div class="action-buttons">
                      <button class="action-btn view-btn" data-id="${newUser.id}"><i class="fas fa-eye"></i></button>
                      <button class="action-btn edit-btn" data-id="${newUser.id}"><i class="fas fa-edit"></i></button>
                      <button class="action-btn delete-btn" data-id="${newUser.id}"><i class="fas fa-trash"></i></button>
                  </div>
              </td>
          `;
      usersTableBody.appendChild(row);

      // Reset form and close modal
      addUserForm.reset();
      addUserModal.style.display = "none";

      // Show success message
      alert(`تم إضافة المستخدم ${name} بنجاح`);
    } catch (error) {
      console.error("Error adding user:", error);
      alert("حدث خطأ أثناء إضافة المستخدم. يرجى المحاولة مرة أخرى.");
    }
  });

  function getRoleInArabic(role) {
    const roles = {
      student: "طالب",
      instructor: "مدرب",
      admin: "مشرف",
    };
    return roles[role] || role;
  }

  // View Course Modal
  const viewCourseModal = document.getElementById("viewCourseModal");
  const courseDetails = document.getElementById("courseDetails");

  document.querySelectorAll('.view-btn[data-type="course"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const courseId = parseInt(btn.getAttribute("data-id"));
      const course = courses.find((c) => c.id === courseId);

      if (course) {
        courseDetails.innerHTML = `
                  <div class="course-detail-section">
                      <h3>معلومات أساسية</h3>
                      <div class="detail-grid">
                          <div class="detail-item">
                              <div class="detail-label">عنوان الدورة</div>
                              <div class="detail-value">${course.title}</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">المدرب</div>
                              <div class="detail-value">${
                                course.instructor
                              }</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">التصنيف</div>
                              <div class="detail-value">${course.category}</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">المستوى</div>
                              <div class="detail-value">${course.level}</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">المدة</div>
                              <div class="detail-value">${course.duration}</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">السعر</div>
                              <div class="detail-value">${
                                course.price
                              } ر.س</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">عدد الطلاب</div>
                              <div class="detail-value">${course.students}</div>
                          </div>
                          <div class="detail-item">
                              <div class="detail-label">الحالة</div>
                              <div class="detail-value">
                                  <span class="status-badge ${
                                    course.status === "معتمد"
                                      ? "status-approved"
                                      : course.status === "قيد المراجعة"
                                      ? "status-pending"
                                      : "status-rejected"
                                  }">${course.status}</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="course-detail-section">
                      <h3>وصف الدورة</h3>
                      <p>${course.description}</p>
                  </div>
                  
                  <div class="course-detail-section">
                      <h3>المرشدين</h3>
                      ${
                        course.mentors.length > 0
                          ? `
                          <div class="mentor-list">
                              ${course.mentors
                                .map(
                                  (mentor) => `
                                  <div class="mentor-item">
                                      <img src="${mentor.image}" alt="${mentor.name}">
                                      ${mentor.name}
                                  </div>
                              `
                                )
                                .join("")}
                          </div>
                      `
                          : "<p>لا يوجد مرشدين لهذه الدورة</p>"
                      }
                  </div>
              `;

        viewCourseModal.style.display = "flex";
      }
    });
  });

  // Close modals
  document.querySelectorAll(".close-modal, .cancel-btn").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach((modal) => {
        modal.style.display = "none";
      });
    });
  });

  // Course Status Filter
  const courseStatusFilter = document.getElementById("courseStatusFilter");
  courseStatusFilter.addEventListener("change", function () {
    const status = this.value;
    const rows = document.querySelectorAll("#coursesTableBody tr");

    rows.forEach((row) => {
      const statusCell = row.querySelector(".status-badge");
      const statusText = statusCell.textContent;

      if (
        status === "all" ||
        (status === "approved" && statusText === "معتمد") ||
        (status === "pending" && statusText === "قيد المراجعة") ||
        (status === "rejected" && statusText === "مرفوض")
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // Approve Course
  document.querySelectorAll(".approve-btn").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const id = this.getAttribute("data-id");

      if (confirm(`هل أنت متأكد من اعتماد الدورة رقم ${id}؟`)) {
        try {
          // Here you would typically send an approval request to your API
          // For example:
          // const response = await fetch(`/api/admin/courses/${id}/approve`, {
          //     method: 'PUT',
          //     headers: { 'Content-Type': 'application/json' }
          // });
          // const data = await response.json();

          // For demo purposes, we'll just update the UI
          const statusBadge = this.closest("tr").querySelector(".status-badge");
          statusBadge.textContent = "معتمد";
          statusBadge.className = "status-badge status-approved";

          // Update action buttons
          const actionButtons = this.closest(".action-buttons");
          actionButtons.innerHTML = `
                      <button class="action-btn view-btn" data-id="${id}" data-type="course"><i class="fas fa-eye"></i></button>
                      <button class="action-btn edit-btn" data-id="${id}" data-type="course"><i class="fas fa-edit"></i></button>
                  `;

          // Reinitialize action buttons
          initializeActionButtons();

          alert("تم اعتماد الدورة بنجاح");
        } catch (error) {
          console.error("Error approving course:", error);
          alert("حدث خطأ أثناء اعتماد الدورة");
        }
      }
    });
  });

  // Reject Course
  document.querySelectorAll(".reject-btn").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const id = this.getAttribute("data-id");
      const reason = prompt(`أدخل سبب رفض الدورة رقم ${id}:`);

      if (reason) {
        try {
          // Here you would typically send a rejection request to your API
          // For example:
          // const response = await fetch(`/api/admin/courses/${id}/reject`, {
          //     method: 'PUT',
          //     headers: { 'Content-Type': 'application/json' },
          //     body: JSON.stringify({ reason })
          // });
          // const data = await response.json();

          // For demo purposes, we'll just update the UI
          const statusBadge = this.closest("tr").querySelector(".status-badge");
          statusBadge.textContent = "مرفوض";
          statusBadge.className = "status-badge status-rejected";

          // Update action buttons
          const actionButtons = this.closest(".action-buttons");
          actionButtons.innerHTML = `
                      <button class="action-btn view-btn" data-id="${id}" data-type="course"><i class="fas fa-eye"></i></button>
                      <button class="action-btn edit-btn" data-id="${id}" data-type="course"><i class="fas fa-edit"></i></button>
                  `;

          alert("تم رفض الدورة بنجاح");
        } catch (error) {
          console.error("Error rejecting course:", error);
          alert("حدث خطأ أثناء رفض الدورة");
        }
      }
    });
  });

  // Delete User/Instructor
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const id = this.getAttribute("data-id");
      const type = this.getAttribute("data-type") || "user";
      const confirmMessage =
        type === "instructor"
          ? `هل أنت متأكد من حذف المدرب رقم ${id}؟`
          : `هل أنت متأكد من حذف المستخدم رقم ${id}؟`;

      if (confirm(confirmMessage)) {
        try {
          // Here you would typically send a delete request to your API
          // For example:
          // const response = await fetch(`/api/admin/${type}s/${id}`, {
          //     method: 'DELETE'
          // });

          // For demo purposes, we'll just remove the row
          this.closest("tr").remove();

          alert(`تم الحذف بنجاح`);
        } catch (error) {
          console.error(`Error deleting ${type}:`, error);
          alert(`حدث خطأ أثناء الحذف`);
        }
      }
    });
  });

  // Initialize action buttons
  function initializeActionButtons() {
    // Re-attach event listeners to newly added buttons
    document
      .querySelectorAll('.view-btn[data-type="course"]')
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const courseId = parseInt(btn.getAttribute("data-id"));
          const course = courses.find((c) => c.id === courseId);

          if (course) {
            // Populate course details
            courseDetails.innerHTML = `
                                         <div class="course-detail-section">
                                             <h3>معلومات أساسية</h3>
                                             <div class="detail-grid">
                                                 <div class="detail-item">
                                                     <div class="detail-label">عنوان الدورة</div>
                                                     <div class="detail-value">${
                                                       course.title
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">المدرب</div>
                                                     <div class="detail-value">${
                                                       course.instructor
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">التصنيف</div>
                                                     <div class="detail-value">${
                                                       course.category
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">المستوى</div>
                                                     <div class="detail-value">${
                                                       course.level
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">المدة</div>
                                                     <div class="detail-value">${
                                                       course.duration
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">السعر</div>
                                                     <div class="detail-value">${
                                                       course.price
                                                     } ر.س</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">عدد الطلاب</div>
                                                     <div class="detail-value">${
                                                       course.students
                                                     }</div>
                                                 </div>
                                                 <div class="detail-item">
                                                     <div class="detail-label">الحالة</div>
                                                     <div class="detail-value">
                                                         <span class="status-badge ${
                                                           course.status ===
                                                           "معتمد"
                                                             ? "status-approved"
                                                             : course.status ===
                                                               "قيد المراجعة"
                                                             ? "status-pending"
                                                             : "status-rejected"
                                                         }">${
              course.status
            }</span>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                         
                                         <div class="course-detail-section">
                                             <h3>وصف الدورة</h3>
                                             <p>${course.description}</p>
                                         </div>
                                         
                                         <div class="course-detail-section">
                                             <h3>المرشدين</h3>
                                             ${
                                               course.mentors.length > 0
                                                 ? `
                                                 <div class="mentor-list">
                                                     ${course.mentors
                                                       .map(
                                                         (mentor) => `
                                                         <div class="mentor-item">
                                                             <img src="${mentor.image}" alt="${mentor.name}">
                                                             ${mentor.name}
                                                         </div>
                                                     `
                                                       )
                                                       .join("")}
                                                 </div>
                                             `
                                                 : "<p>لا يوجد مرشدين لهذه الدورة</p>"
                                             }
                                         </div>
                                     `;
            viewCourseModal.style.display = "flex";
          }
        });
      });
  }

  // Initialize charts
  function initializeCharts() {
    // User Analytics Chart
    const userCtx = document
      .getElementById("userAnalyticsChart")
      .getContext("2d");
    new Chart(userCtx, {
      type: "line",
      data: {
        labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
        datasets: [
          {
            label: "المستخدمين الجدد",
            data: [65, 78, 90, 115, 135, 150],
            borderColor: "#1700FF",
            backgroundColor: "rgba(23, 0, 255, 0.1)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "end",
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    // Course Analytics Chart
    const courseCtx = document
      .getElementById("courseAnalyticsChart")
      .getContext("2d");
    new Chart(courseCtx, {
      type: "doughnut",
      data: {
        labels: ["البرمجة", "التصميم", "التسويق", "إدارة الأعمال", "اللغات"],
        datasets: [
          {
            data: [35, 25, 15, 15, 10],
            backgroundColor: [
              "#1700FF",
              "#00C49F",
              "#FFBB28",
              "#FF8042",
              "#0088FE",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
        cutout: "70%",
      },
    });
  }
});
