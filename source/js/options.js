'use strict';

(function () {
  const string = document.querySelector('.options__string');
  const depth = document.querySelector('.options__depth');
  const arrow = document.querySelector('.options__arrow');
  const list = document.querySelector('.options__list');

  const optionSecond = document.querySelector('.options__item--2');
  const optionThird = document.querySelector('.options__item--3');
  const optionFourth = document.querySelector('.options__item--4');
  arrow.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    let startCoord = evt.clientX;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = startCoord - moveEvt.clientX;

      startCoord = moveEvt.clientX;

      let newLocation = arrow.offsetLeft - shift;

      if (newLocation < 0 || newLocation > string.offsetWidth - arrow.offsetWidth) {
        newLocation = newLocation < 0 ? 0 : string.offsetWidth - arrow.offsetWidth;
        document.removeEventListener('mousemove', onMouseMove);
      }
      arrow.style.left = newLocation + 'px';
      let depthWidth = newLocation * 100 / string.offsetWidth;
      depth.style.width = depthWidth + '%';
      if (window.innerWidth < 510) {
        list.style.transform = `translateX(-${newLocation * 3.5}px)`;
        depthWidth > 15 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 40 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 60 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 510 && window.innerWidth < 690) {
        list.style.transform = `translateX(-${newLocation}px)`;
        depthWidth > 15 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 40 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 60 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 690 && window.innerWidth < 930) {
        list.style.transform = `translateX(-${newLocation * 0.4}px)`;
        depthWidth > 20 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 45 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 70 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 930) {
        depthWidth > 20 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 45 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 70 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  let touchObj = null;

  arrow.addEventListener('touchstart', function (evt) {
    evt.preventDefault();
    touchObj = evt.changedTouches[0];

    let startCoord = parseInt(touchObj.clientX);

    const onArrowMove = function (moveEvt) {
      moveEvt.preventDefault();
      touchObj = moveEvt.changedTouches[0];
      let shift = startCoord - parseInt(touchObj.clientX);
      startCoord = parseInt(touchObj.clientX);
      let newLocation = arrow.offsetLeft - shift;

      if (newLocation < 0 || newLocation > string.offsetWidth - arrow.offsetWidth) {
        newLocation = newLocation < 0 ? 0 : string.offsetWidth - arrow.offsetWidth;
        arrow.removeEventListener('touchmove', onArrowMove, false);
      }
      arrow.style.left = newLocation + 'px';
      let depthWidth = newLocation * 100 / string.offsetWidth;
      depth.style.width = depthWidth + '%';

      if (window.innerWidth < 510) {
        list.style.transform = `translateX(-${newLocation * 3.5}px)`;
        depthWidth > 15 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 40 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 60 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 510 && window.innerWidth < 690) {
        list.style.transform = `translateX(-${newLocation}px)`;
        depthWidth > 15 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 40 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 60 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 690 && window.innerWidth < 930) {
        list.style.transform = `translateX(-${newLocation * 0.4}px)`;
        depthWidth > 20 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 45 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 70 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }

      if (window.innerWidth >= 930) {
        depthWidth > 20 ? optionSecond.style.opacity = 1 : optionSecond.style.opacity = 0.2;
        depthWidth > 45 ? optionThird.style.opacity = 1 : optionThird.style.opacity = 0.2;
        depthWidth > 70 ? optionFourth.style.opacity = 1 : optionFourth.style.opacity = 0.2;
      }
    };

    let onTouchUp = function (upEvt) {
      upEvt.preventDefault();
      arrow.removeEventListener('touchmove', onArrowMove, false);
      arrow.removeEventListener('touchend', onTouchUp, false);
    };

    arrow.addEventListener('touchmove', onArrowMove, false);
    arrow.addEventListener('touchend', onTouchUp, false);
  }, false);
})();
