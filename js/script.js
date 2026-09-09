const teamStage = document.querySelector("#teamStage");
const teamBg = document.querySelector("#teamBg");
const teamDetail = document.querySelector("#teamDetail");
const members = [...document.querySelectorAll(".member")];
const siteNav = document.querySelector("#siteNav");
const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
const navAnchors = [...document.querySelectorAll(".nav-links a")];

const silaContent = {
  1: {
    title: "Sila Ke-1: Ketuhanan Yang Maha Esa",
    pembahasan: "Sila ini mengandung nilai religius yang menjadi landasan spiritual bangsa. Maknanya adalah pengakuan terhadap Tuhan sebagai pencipta alam semesta, sekaligus menjamin kebebasan setiap warga negara untuk memeluk agama dan beribadah sesuai keyakinannya tanpa adanya paksaan.",
    contoh: "Menjaga toleransi dengan tidak mengganggu ibadah pemeluk agama lain, serta berteman dengan siapa saja tanpa menjadikan perbedaan keyakinan sebagai sebuah halangan."
  },
  2: {
    title: "Sila Ke-2: Kemanusiaan yang Adil dan Beradab",
    pembahasan: "Mengedepankan prinsip kesetaraan, hak asasi, dan martabat manusia secara adil. Sila ini menolak segala bentuk penindasan, kekerasan, maupun diskriminasi, serta mendorong sikap saling menyayangi antarsesama manusia.",
    contoh: "Berani membela kebenaran saat melihat orang lain yang mengalami perundungan (bullying), dan selalu memperlakukan setiap orang dengan sopan santun tanpa memandang latar belakang ekonomi atau status sosialnya."
  },
  3: {
    title: "Sila Ke-3: Persatuan Indonesia",
    pembahasan: "Fokus pada rasa nasionalisme, cinta tanah air, dan menjaga keutuhan negara di tengah keberagaman suku, ras, dan budaya. Kepentingan bangsa dan negara harus diletakkan di atas kepentingan pribadi maupun golongan.",
    contoh: "Berpartisipasi aktif dalam kegiatan gotong royong warga, mempelajari kesenian daerah, serta bangga menggunakan produk-produk buatan dalam negeri untuk memajukan ekonomi lokal."
  },
  4: {
    title: "Sila Ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
    pembahasan: "Mengandung prinsip demokrasi kerakyatan. Sila ini menekankan bahwa pengambilan keputusan untuk kepentingan bersama harus selalu mengutamakan proses musyawarah guna mencapai mufakat, dengan dilandasi akal sehat.",
    contoh: "Menghargai perbedaan pendapat saat berdiskusi, tidak memaksakan kehendak pribadi kepada anggota forum, dan melaksanakan hasil keputusan bersama dengan lapang dada meskipun awalnya pendapat kita tidak diterima."
  },
  5: {
    title: "Sila Ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia",
    pembahasan: "Bertujuan mewujudkan kesejahteraan yang merata dan keadilan dalam segala aspek kehidupan bagi seluruh rakyat Indonesia. Sila ini juga menekankan keseimbangan antara hak dan kewajiban setiap individu di masyarakat.",
    contoh: "Tidak memonopoli atau merusak fasilitas umum yang menjadi hak bersama, membagi beban kerja secara proporsional dalam sebuah tim, serta menghindari gaya hidup boros yang berlebihan."
  }
};

function activateMember(member) {
  members.forEach((item) => item.classList.toggle("is-active", item === member));
  teamStage.classList.remove("layout-left", "layout-right", "layout-center");
  teamStage.classList.add("has-active", `layout-${member.dataset.layout || "center"}`);
  teamBg.style.backgroundImage = `url("${member.dataset.img}")`;
  teamDetail.innerHTML = `
    <span class="detail-role">${member.dataset.role}</span>
    <h3>${member.dataset.name}</h3>
    <p>${member.dataset.motto}</p>
  `;
}

function resetMembers() {
  teamStage.classList.remove("has-active", "layout-left", "layout-right", "layout-center");
  members.forEach((member) => member.classList.remove("is-active"));
}

members.forEach((member) => {
  member.addEventListener("mouseenter", () => activateMember(member));
  member.addEventListener("focus", () => activateMember(member));
  member.addEventListener("click", (event) => {
    event.stopPropagation();
    activateMember(member);
  });
});

teamStage.addEventListener("mouseleave", resetMembers);
document.addEventListener("click", (event) => {
  if (!teamStage.contains(event.target)) resetMembers();
});

const garudaApp = document.querySelector("#garudaApp");
const garudaButton = document.querySelector("#garudaButton");
const silaOrbit = document.querySelector("#silaOrbit");
const silaButtons = [...document.querySelectorAll(".sila-symbol")];
const silaPanel = document.querySelector("#silaPanel");
const panelKicker = document.querySelector("#panelKicker");
const panelTitle = document.querySelector("#panelTitle");
const panelBody = document.querySelector("#panelBody");
const backShield = document.querySelector("#backShield");
const dots = [...document.querySelectorAll("#progressDots span")];

garudaButton.addEventListener("click", () => {
  garudaApp.classList.add("is-zoomed");
});

function openSila(number) {
  const content = silaContent[number];
  silaOrbit.classList.add("has-selected");
  silaPanel.classList.add("has-content");
  silaButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.sila === String(number)));
  dots.forEach((dot, index) => dot.classList.toggle("is-active", index === Number(number) - 1));
  panelKicker.textContent = `Sila ke-${number}`;
  panelTitle.textContent = content.title;
  panelBody.innerHTML = `
    <p><strong>Pembahasan:</strong> ${content.pembahasan}</p>
    <p><strong>Contoh:</strong> ${content.contoh}</p>
  `;
}

function backToShield() {
  garudaApp.classList.remove("is-zoomed");
  silaOrbit.classList.remove("has-selected");
  silaPanel.classList.remove("has-content");
  silaButtons.forEach((button) => button.classList.remove("is-active"));
  dots.forEach((dot) => dot.classList.remove("is-active"));
  panelKicker.textContent = "Mode Garuda";
  panelTitle.textContent = "Perisai Pancasila";
  panelBody.innerHTML = "<p>Klik gambar Garuda untuk menampilkan fokus perisai. Setelah itu, pilih salah satu lambang sila untuk membuka pembahasan dan contoh penerapannya.</p>";
}

silaButtons.forEach((button) => {
  button.addEventListener("click", () => openSila(button.dataset.sila));
});

backShield.addEventListener("click", backToShield);

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -45% 0px" });

document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));
