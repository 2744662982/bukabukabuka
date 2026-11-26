/* 飞行汽车课程作业 · 交互增强（无依赖） */
(function () {
  'use strict';

  // 1. 顶部阅读进度
  var bar = document.getElementById('progress');
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    bar.style.width = (p * 100).toFixed(1) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. 目录高亮（scrollspy）
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) map[id] = a;
  });
  var ids = Object.keys(map);

  if ('IntersectionObserver' in window && ids.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
      });
      var best = null, bestVal = 0;
      ids.forEach(function (id) {
        var v = visible[id] || 0;
        if (v > bestVal) { bestVal = v; best = id; }
      });
      if (best) {
        links.forEach(function (a) { a.classList.remove('active'); });
        map[best].classList.add('active');
      }
    }, { rootMargin: '-72px 0px -55% 0px', threshold: [0, 0.05, 0.15, 0.3, 0.6] });

    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  // 3. 打印时展开所有折叠内容（目前无折叠，预留）
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details').forEach(function (d) { d.open = true; });
  });
})();
