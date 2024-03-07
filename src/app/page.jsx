/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div id="home-page" className="flex flex-col gap-8">
      {/* hero / banner */}
      <section>
        <div className="flex flex-col w-full aspect-[5/3]">
          <img
            className="w-full h-full object-cover"
            src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/6513c0307c7d701e57f62433_Bayt%20A%27elat.webp"
            alt="logo-header"
          />
        </div>
      </section>

      {/*  professional option */}
      <section className="px-4 flex flex-col gap-8">
        <h1 className="text-5xl">
          PILIHAN PROFESIONAL UNTUK HUNIAN YANG IDEAL
        </h1>
        <div className="flex gap-16 text-xs font-bold">
          <div className="flex flex-col gap-2">
            <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
            <span className="uppercase">
              daftar <br /> harga kami
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
            <span className="uppercase">
              hubungi <br /> kami
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-10 px-4 text-xs font-bold tracking-wide">
          <span>PENGEMBANG DESAIN ARSITEKTUR DAN INTERIOR TERPERCAYA</span>
          <span>BERLOKASI DI BOGOR (HQ), JAKARTA, DAN SEMARANG</span>
          <span>COPYRIGHT © 2012 SIBAMBO STUDIO</span>
        </div>
      </section>

      {/* youtube */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col w-full aspect-[5/3]">
          <img
            className="w-full h-full object-cover"
            src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/6528be34fec11464e7b5ea82_YVN%20House-p-1080.webp"
            alt="logo-header"
          />
        </div>
        <div className="flex flex-col w-full aspect-[5/3]">
          <img
            className="w-full h-full object-cover"
            src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/6513c77baf140d429da937fb_RNI%20House-p-1080.webp"
            alt="logo-header"
          />
        </div>
        <div className="flex flex-col w-full aspect-[5/3]">
          <img
            className="w-full h-full object-cover"
            src="https://assets-global.website-files.com/647861b1c7b7fd5334ac64a3/65d2d76dba4f7f1e83e457ed_Curva%20Residence%20-%20Thumbnail-p-1080.jpg"
            alt="logo-header"
          />
        </div>
      </section>

      {/* award */}
      <section className="flex flex-col gap-8  !mt-20">
        <h1 className="text-4xl capitalize px-4">PENGHARGAAN</h1>
        <div className="flex flex-col gap-4 px-4">
          <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
          <p className="text-lg tracking-wide">
            Hidup Anda pantas untuk dirayakan. Izinkan kami mewujudkannya dalam
            bentuk hunian impian.
          </p>
        </div>
        <div className="flex flex-col w-full aspect-[5/3]">
          <img
            className="w-full h-full object-cover"
            src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/65d3050017669d69bed6c763_Penghargaan-p-1080.jpg"
            alt="award silver play button"
          />
        </div>
      </section>

      {/* work flow */}
      <section className="flex flex-col gap-8 py-20 px-4 bg-red-50 mt-8">
        <h1 className="text-4xl capitalize">ALUR KERJA PERENCANAAN</h1>
        <div className="flex flex-col gap-4">
          <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
          <p className="text-lg tracking-wide">
            Hidup Anda pantas untuk dirayakan. Izinkan kami mewujudkannya dalam
            bentuk hunian impian.
          </p>
        </div>
        <div className="flex flex-col gap-2 divide-y border-y py-2">
          {[
            "Pertemuan awal",
            "Survey lokasi",
            "Pengukuran",
            "Desain konsep",
            "Pembahasan konsep",
            "Desain detail",
            "Pembahasan detail",
            "Pembuatan gambar kerja",
            "Pembahasan gambar kerja",
            "Pelaksanaan",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 pt-2 uppercase "
            >
              <img
                className="aspect-square w-16"
                src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/647b790e381b769798e58459_greeting-p-500.png"
                alt="work-flow"
              />
              <p className="text-xl font-bold tracking-wide">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8  !mt-20">
        <h1 className="text-4xl uppercase px-4">
          Portofolio <br /> pilihan
        </h1>
        <div className="flex flex-col gap-4 px-4">
          <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
          <p className="text-lg tracking-wide">
            Lihat beberapa Video Project Hunian yang telah kami kerjakan untuk
            Inspirasi Rumah Impian di kanal Youtube Sibambo Studio.
          </p>
        </div>
      </section>
      <hr />

      {Array(6)
        .fill(0)
        .map((_, index) => (
          <section className="border-t pt-7 flex flex-col gap-4" key={index}>
            <span className="text-xs font-bold px-4">2022</span>
            <h3 className="text-lg font-bold px-4">COPACIOUS PATIO HOUSE</h3>
            <p className="px-4">
              Selain megah dan elegan, penting bagi kita untuk menciptakan
              ekosistem yang baik di area rumah. Tujuannya, agar rumah punya
              sirkulasi yang baik serta suhu ruangan yang ideal.
            </p>

            <div className="flex flex-col w-full aspect-[5/3]">
              <img
                className="w-full h-full object-cover"
                src="https://assets-global.website-files.com/647861b1c7b7fd5334ac64a3/65e18c346d15723b992a8a1c_Copacious.webp"
                alt="award silver play button"
              />
            </div>
          </section>
        ))}

      <section className="flex flex-col gap-8  !mt-20">
        <h1 className="text-4xl uppercase px-4">
          produk <br /> perencanaan <br /> yang anda <br /> dapatkan
        </h1>
        <div className="flex flex-col gap-4 px-4">
          <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
          <p className="text-lg tracking-wide">
            Lihat beberapa Video Project Hunian yang telah kami kerjakan untuk
            Inspirasi Rumah Impian di kanal Youtube Sibambo Studio.
          </p>
        </div>
      </section>

      <hr />

      <section className="py-5 px-4 flex flex-col gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div className="bg-red-50 p-3 flex flex-col gap-2" key={index}>
              <img
                className="aspect-square w-12"
                src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/6501dc78ae17248e51a382f9_flat-line_blueprint-architecture.svg"
                alt=""
              />
              <h3 className="uppercase font-bold">Gambar Kerja Perencanaan</h3>
              <div className="flex gap-2 items-center text-amber-700">
                <i className="material-icons">file_download</i>
                <small>Download Dokumen</small>
              </div>
            </div>
          ))}
      </section>

      <section className="flex flex-col gap-8  !mt-20">
        <h1 className="text-4xl uppercase px-4">
          Pendapat <br /> Mereka
        </h1>
        <div className="flex flex-col gap-4 px-4">
          <span className="w-12 h-6 bg-red-200 rounded-full">&nbsp;</span>
          <p className="text-lg tracking-wide">
            Lihat beberapa Video Project Hunian yang telah kami kerjakan untuk
            Inspirasi Rumah Impian di kanal Youtube Sibambo Studio.
          </p>
        </div>
      </section>

      <hr />

      {Array(6)
        .fill(0)
        .map((_, index) => (
          <section className="px-4  flex flex-col gap-4" key={index}>
            <div className="flex flex-col w-full aspect-[5/3] relative -z-10">
              <img
                className="w-full h-full object-cover "
                src="https://assets-global.website-files.com/647861b1c7b7fd5334ac64a3/65e18c346d15723b992a8a1c_Copacious.webp"
                alt="award silver play button"
              ></img>
              <div className="absolute bottom-0 left-0 bg-gray-50 p-3">
                <img src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/6428624462519323b5453d39_img-quotes.svg" alt="" />
              </div>
            </div>
            <small>
              Selain megah dan elegan, penting bagi kita untuk menciptakan
              ekosistem yang baik di area rumah. Tujuannya, agar rumah punya
              sirkulasi yang baik serta suhu ruangan yang ideal.
            </small>
            <div className="flex items-center gap-3">
              {/* image avatar */}
              <img
                className=" w-12 h-12 rounded-full"
                src="https://assets-global.website-files.com/647861b1c7b7fd5334ac64a3/6513bb87ab78f82c0cae5031_Profil-FB-Kosong-PNG-%E2%80%93-ifoxsoft.com_.webp"
                alt=""
              />
              {/* name and position */}
              <div className="">
                <span className="font-bold uppercase">Majid</span>
                <br />
                <span>CEO</span>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}
