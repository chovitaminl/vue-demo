export class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSongs (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: getSongSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `//y.gtimg.cn/music/photo_new/T001R300x300M000${musicData.singer[0].mid}.jpg?max_age=2592000`,
    url: `http://thirdparty.gtimg.com/C100${musicData.songmid}.m4a?fromtag=38`
  })
}

function getSongSinger (singerList) {
  let ret = []
  singerList.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
