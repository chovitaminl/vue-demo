/*jshint esversion: 6 */

export default {
  postTime(data) {
    'use strict';
    const minute = 60 * 1000,
      hour = minute * 60,
      day = 24 * hour,
      month = 30 * day,
      year = 12 * month,
      nowTime = new Date().getTime(),
      publicTime = new Date(data).getTime(),
      diff = nowTime - publicTime;
    let diffDate = {
      minute: Math.round(diff / minute),
      hour: Math.round(diff / hour),
      day: Math.round(diff / day),
      month: Math.round(diff / month),
      year: Math.round(diff / year )
    };

    if (diffDate.year > 1) {
      return `发布于${diffDate.year}年前`;
    } else if (diffDate.month > 1) {
      return `发布于${diffDate.month}月前`;
    } else if (diffDate.day > 1) {
      return `发布于${diffDate.day}日前`;
    } else if (diffDate.hour > 1) {
      return `发布于${diffDate.hour}小时前`;
    } else if (diffDate.minute > 1) {
      return `发布于${diffDate.minute}分钟前`;
    }

  }
};
