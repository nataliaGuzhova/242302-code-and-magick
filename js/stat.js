'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramWidth = 40;
  var histogramHeight = 150;
  var indent = 50;
  var initialX = 130;
  var initialY = 90;
  var minTime = 0;
  var youName = 'Вы';
  var textFillStyle = 'rgba(0, 0, 0, 1.0)';
  var colorOpacity = 1;
  // для расчета масштаба
  var maxTime = getMaxElement(times);
  var step = histogramHeight / (maxTime - minTime);
  // рисуем гистограму

  for (var i = 0; i < times.length; i++) {

    if (names[i] === youName) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      colorOpacity = Math.random();
      ctx.fillStyle = 'rgba(0, 0, 256, ' + colorOpacity + ')';
    }

    drawBar(ctx, names[i], times[i], initialX, initialY, histogramWidth, histogramHeight, step, indent, i, textFillStyle);
  }
};

function getMaxElement(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function drawBar(ctx, name, time, initialX, initialY, histogramWidth, histogramHeight, step, indent, ratio, textFillStyle) {
  var initialTextY = initialY + 20;
  var initialTimeY = initialY - 10;

  ctx.fillRect(initialX + histogramWidth * ratio + indent * ratio, initialY + histogramHeight - time * step, histogramWidth, time * step);

  ctx.fillStyle = textFillStyle;
  ctx.fillText(name, initialX + histogramWidth * ratio + indent * ratio, initialTextY + histogramHeight);
  ctx.fillText(Math.floor(time), initialX + histogramWidth * ratio + indent * ratio, initialTimeY + histogramHeight - time * step);
}
