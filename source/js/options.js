'use strict';

(function () {
  const TABLET_WIDTH = 690;
  const DESKTOP_WIDTH = 930;
  const TABLET_OPTION_GAP = 20;
  const DESKTOP_OPTION_GAP = 25;

  const string = document.querySelector('.options__string');
  const depth = document.querySelector('.options__depth');
  const arrow = document.querySelector('.options__arrow');
  const list = document.querySelector('.options__list');
  const options = document.querySelectorAll('.options__item');

  const getOpacity = function (gap, width, screenWidthMin, screenWidthMax, translate) {
    if (window.innerWidth >= screenWidthMin && window.innerWidth < screenWidthMax) {
      list.style.transform = `translateX(-${translate}px)`;
      options.forEach(function (el, i) {
        width >= gap * i ? el.style.opacity = 1 : el.style.opacity = 0.2;
      });
    }
  };

  const getNewLocation = function (newLocation) {
    arrow.style.left = newLocation + 'px';
    let depthWidth = newLocation * 100 / string.offsetWidth;
    depth.style.width = depthWidth + '%';
    let listTranslate = newLocation * ((list.offsetWidth - string.offsetWidth) / (string.offsetWidth - arrow.offsetWidth));

    getOpacity(TABLET_OPTION_GAP, depthWidth, 0, TABLET_WIDTH, listTranslate);

    getOpacity(DESKTOP_OPTION_GAP, depthWidth, TABLET_WIDTH, DESKTOP_WIDTH, listTranslate);

    getOpacity(DESKTOP_OPTION_GAP, depthWidth, DESKTOP_WIDTH, Infinity, 0);
  };

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
      getNewLocation(newLocation);
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
      getNewLocation(newLocation);
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
