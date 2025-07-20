// Sample data – replace with your actual comics
const comics = [
  {
    id: 1,
    title: "Yankee JK Ayaka-san no Jakuten",
    desc: "Rahasia-rahasianya yang hanya ia ketahui… Itsuki Hayashi, seorang otaku pemalu yang baru saja masuk SMA dan ingin menjadi seorang seniman manga, duduk di sebelah seorang Yankee JK yang terlihat sangat menakutkan! Cara dia berbicara, cara dia melihat, cara dia bertindak, segala sesuatu tentang dirinya sangat menakutkan… Tapi ternyata, dia punya banyak kelemahan tak terduga!",
    cover: ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Icon/icon.png",
    genres: ["Seinen", "Comedy", "Romance", "School Life", "Slice Of Life", "Delinquents"],
    status: "Ongoing",
    chapters: [
      {id: 1, title: "Chapter 1", images: [".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_01/1.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_01/2.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_01/3.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_01/4.png"]},
      {id: 2, title: "Chapter 2", images: [".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_02/1.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_02/2.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_02/3.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_02/4.png"]},
      {id: 3, title: "Chapter 3", images: [".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/1.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/2.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/3.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/4.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/5.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_03/6.png"]},
      {id: 4, title: "Chapter 4", images: [".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/1.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/2.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/3.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/4.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/5.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_04/6.png"]},
      {id: 5, title: "Chapter 5", images: [".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/1.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/2.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/3.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/4.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/5.png", ".Manga/Yankee_JK_Ayaka-san_no_Jakuten/Chp_05/6.png"]},
    ]
  },
  {
    id: 2,
    title: "Majo To Youhei",
    desc: "Zig—seorang tentara bayaran tinggi dan kekar—berpartisipasi dalam perburuan penyihir. Setelah duel sengit dengan penyihir yang mematikan, ia mengetahui keinginannya. 'Aku ingin kau melindungiku,' pintanya, lelah karena hidupnya dianggap remeh. Mencari tempat untuk bertahan hidup, penyihir dan tentara bayaran itu mengincar benua yang tidak dikenal!",
    cover: ".Manga/Majo_To_Youhei/Icon/icon.png",
    genres: ["Shounen", "Action", "Fantasy"],
    status: "Ongoing",
    chapters: [
      {id: 1, title: "Chapter 1", images: [".Manga/Majo_To_Youhei/Chp_01/1.png", ".Manga/Majo_To_Youhei/Chp_01/2.png", ".Manga/Majo_To_Youhei/Chp_01/3.png", ".Manga/Majo_To_Youhei/Chp_01/4.png", ".Manga/Majo_To_Youhei/Chp_01/5.png", ".Manga/Majo_To_Youhei/Chp_01/6.png", ".Manga/Majo_To_Youhei/Chp_01/7.png", ".Manga/Majo_To_Youhei/Chp_01/8.png", ".Manga/Majo_To_Youhei/Chp_01/9.png", ".Manga/Majo_To_Youhei/Chp_01/10.png", ".Manga/Majo_To_Youhei/Chp_01/11.png", ".Manga/Majo_To_Youhei/Chp_01/12.png", ".Manga/Majo_To_Youhei/Chp_01/13.png", ".Manga/Majo_To_Youhei/Chp_01/14.png", ".Manga/Majo_To_Youhei/Chp_01/15.png", ".Manga/Majo_To_Youhei/Chp_01/16.png", ".Manga/Majo_To_Youhei/Chp_01/17.png", ".Manga/Majo_To_Youhei/Chp_01/18.png", ".Manga/Majo_To_Youhei/Chp_01/19.png", ".Manga/Majo_To_Youhei Chp_01/20.png", ".Manga/Majo_To_Youhei/Chp_01/21.png", ".Manga/Majo_To_Youhei/Chp_01/22.png", ".Manga/Majo_To_Youhei/Chp_01/23.png", ".Manga/Majo_To_Youhei/Chp_01/24.png", ".Manga/Majo_To_Youhei/Chp_01/25.png", ".Manga/Majo_To_Youhei/Chp_01/26.png", ".Manga/Majo_To_Youhei/Chp_01/27.png", ".Manga/Majo_To_Youhei/Chp_01/28.png", ".Manga/Majo_To_Youhei/Chp_01/29.png", ".Manga/Majo_To_Youhei/Chp_01/30.png", ".Manga/Majo_To_Youhei Chp_01/31.png", ".Manga/Majo_To_Youhei/Chp_01/32.png", ".Manga/Majo_To_Youhei/Chp_01/33.png", ".Manga/Majo_To_Youhei/Chp_01/34.png", ".Manga/Majo_To_Youhei/Chp_01/35.png", ".Manga/Majo_To_Youhei/Chp_01/36.png", ".Manga/Majo_To_Youhei/Chp_01/37.png", ".Manga/Majo_To_Youhei/Chp_01/38.png", ".Manga/Majo_To_Youhei/Chp_01/39.png", ".Manga/Majo_To_Youhei/Chp_01/40.png", ".Manga/Majo_To_Youhei/Chp_01/41.png", ".Manga/Majo_To_Youhei/Chp_01/42.png", ".Manga/Majo_To_Youhei/Chp_01/43.png", ".Manga/Majo_To_Youhei/Chp_01/44.png", ".Manga/Majo_To_Youhei/Chp_01/45.png", ".Manga/Majo_To_Youhei/Chp_01/46.png", ".Manga/Majo_To_Youhei/Chp_01/47.png", ".Manga/Majo_To_Youhei/Chp_01/48.png", ".Manga/Majo_To_Youhei/Chp_01/49.png", ".Manga/Majo_To_Youhei/Chp_01/50.png", ".Manga/Majo_To_Youhei/Chp_01/51.png", ".Manga/Majo_To_Youhei/Chp_01/52.png", ".Manga/Majo_To_Youhei/Chp_01/53.png", ".Manga/Majo_To_Youhei/Chp_01/54.png", ".Manga/Majo_To_Youhei/Chp_01/55.png", ".Manga/Majo_To_Youhei/Chp_01/56.png", ".Manga/Majo_To_Youhei/Chp_01/57.png", ".Manga/Majo_To_Youhei/Chp_01/58.png", ".Manga/Majo_To_Youhei/Chp_01/59.png", ".Manga/Majo_To_Youhei/Chp_01/60.png", ".Manga/Majo_To_Youhei/Chp_01/61.png", ".Manga/Majo_To_Youhei/Chp_01/62.png", ".Manga/Majo_To_Youhei/Chp_01/63.png", ".Manga/Majo_To_Youhei/Chp_01/64.png", ".Manga/Majo_To_Youhei/Chp_01/65.png", ".Manga/Majo_To_Youhei/Chp_01/66.png", ".Manga/Majo_To_Youhei/Chp_01/67.png"]},

    ]
  }
];

function getParam(param) {
  const url = new URL(window.location);
  return url.searchParams.get(param);
}

// Home Page Rendering
function renderComics() {
  const container = document.getElementById('comicList');
  if(!container) return;
  const search = document.getElementById('searchInput').value.toLowerCase();

  container.innerHTML = comics
  .filter(c => c.title.toLowerCase().includes(search))
  .map(c => `
    <div class="comic-item">
      <a href="comic.html?id=${c.id}">
        <img src="${c.cover}" alt="${c.title} Cover" class="comic-cover" />
        <h2>${c.title}</h2>
      </a>
      <div class="status-tag">${c.status}</div>
      <div class="genre-tags">
        ${c.genres.map(g => `<span class="genre">${g}</span>`).join(' ')}
      </div>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

// Comic Detail Page
function renderComicDetail() {
  const id = Number(getParam('id'));
  const comic = comics.find(c => c.id === id);
  if (!comic) return;

  document.getElementById('comicDetail').innerHTML = `
    <h1>${comic.title}</h1>
    <p>${comic.desc}</p>
    <h3>Chapters</h3>
    <ul>
      ${comic.chapters.map(ch => `
        <li><a href="reader.html?comic=${comic.id}&chapter=${ch.id}">${ch.title}</a></li>
      `).join('')}
    </ul>
  `;
}

// Comic Reader Page
function renderReader() {
  const comicId = Number(getParam('comic'));
  const chapterId = Number(getParam('chapter'));
  const comic = comics.find(c => c.id === comicId);
  const chapter = comic?.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return;

  // ✅ THIS LINE FIXES THE BACK BUTTON
  document.getElementById('readerHeader').innerHTML =
    `<a href="comic.html?id=${comicId}">&larr; Back to ${comic.title}</a>`;

  document.getElementById('reader').innerHTML =
    `<h2>${comic.title} – ${chapter.title}</h2>` +
    chapter.images.map(src =>
      `<img class="reader-img" src="${src}" alt="">`
    ).join('');
}

// Initialize appropriate page
if (document.getElementById('comicList')) renderComics();
if (document.getElementById('comicDetail')) renderComicDetail();
if (document.getElementById('reader')) renderReader();