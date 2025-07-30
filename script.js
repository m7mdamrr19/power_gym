function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


function filterCourses(category) {
  let cards = document.querySelectorAll('.course-card');
  let buttons = document.querySelectorAll('.filter-buttons button');

  // إزالة التحديد من كل الأزرار
  buttons.forEach(btn => btn.classList.remove('active'));

  // تفعيل الزر الحالي
  event.target.classList.add('active');

  // إظهار/إخفاء الكروت
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}



