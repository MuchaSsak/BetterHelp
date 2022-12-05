const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromLeft');
  }
});
});

observer.observe(document.querySelector('.fadeInViewFromLeftObserver'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromRight');
  }
});
});

observer2.observe(document.querySelector('.fadeInViewFromRightObserver'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromDown');
  }
});
});

observer3.observe(document.querySelector('.fadeInViewFromDownObserver'));


// ...
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromLeft');
  }
});
});

observer4.observe(document.querySelector('.fadeInViewFromLeftObserver2'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromRight');
  }
});
});

observer5.observe(document.querySelector('.fadeInViewFromRightObserver2'));

const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('fadeInViewFromTop');
  }
});
});

observer6.observe(document.querySelector('.fadeInViewFromTopObserver'));

const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('scaleInViewFrom0');
  }
});
});

observer7.observe(document.querySelector('.scaleInFrom0Observer'));