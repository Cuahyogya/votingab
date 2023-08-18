import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Profile = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <h1 class="mt-10 text-center text-2xl font-bold">PROFILE CANDIDATE</h1>
      <div class=" rounded-xl  mt-4 mx-auto p-10 flex flex-col gap-5 md:flex-row md:1/3 w-[80%]">
        <div class="md:w-1/3 text-slate-600 hover:text-black text-center w-[80%]">
          <div class=" flex flex-auto rounded-xl h-autodrop-shadow-lg w-full">
            <img
              src="/prabowo.jpg"
              alt="Prabowo"
              class="rounded-lg mx-auto hover:scale-110  hover:shadow-lg"
            />
          </div>
          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg mt-3">
            <span class="text-black font-mono text-center font-semibold text-xl mx-8 mt-3">
              H. Prabowo Subianto Djojoha dikusumo
            </span>
          </div>
          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg  mt-3">
            <span class=" fselection:bg-fuchsia-300 selection:text-fuchsia-900 text-lg">
              Letnan Jenderal TNI (Purn.) H. Prabowo Subianto Djojohadikusumo
              (lahir 17 Oktober 1951) adalah seorang politisi, pengusaha, dan
              perwira tinggi militer Indonesia. Ia menempuh pendidikan dan
              jenjang karier militer selama 28 tahun sebelum berkecimpung dalam
              dunia bisnis, politik, dan pemerintahan. Pada tanggal 23 Oktober
              2019, Prabowo dilantik menjadi Menteri Pertahanan ke-26 Republik
              Indonesia dalam Kabinet Indonesia Maju untuk periode 2019 hingga
              2024
            </span>
          </div>
        </div>
        <div class=" md:w-1/3 text-slate-600 hover:text-black  text-center w-[80%] ">
          <div class=" flex flex-auto rounded-xl h-autodrop-shadow-lg w-full">
            <img
              src="/anies.jpg"
              alt="Anies"
              class="rounded-lg mx-auto hover:scale-110  hover:shadow-lg"
            />
          </div>

          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg mt-3">
            <span class=" text-black font-mono text-center font-semibold text-xl mx-8 mt-3 ">
              H. Anies Rasyid Baswedan, S.E., M.P.P., Ph.D.
            </span>
          </div>

          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg w-full mt-3">
            <span class="selection:bg-fuchsia-300 selection:text-fuchsia-900 text-lg">
              Anies Rasyid Baswedan, S.E., M.P.P., Ph.D. , lahir 7 Mei 1969
              adalah akademisi, aktivis sosial, dan politisi Indonesia. Setelah
              mengenyam pendidikan di bidang ilmu politik dan pemerintahan,
              Anies berkarier sebagai akademisi. Ia menjabat sebagai Rektor
              Universitas Paramadina selama delapan tahun dan menggagas gerakan
              Indonesia Mengajar. Ia kemudian ikut serta dalam konvensi calon
              presiden yang diselenggarakan oleh Partai Demokrat pada tahun
              2013. Pada bulan Oktober 2014, ia ditunjuk oleh Presiden Joko
              Widodo menjadi Menteri Pendidikan dan Kebudayaan pada Kabinet
              Kerja.
            </span>
          </div>
        </div>

        <div class="md:w-1/3 text-slate-600 hover:text-black text-center w-[80%]">
          <div class=" flex flex-auto rounded-xl h-autodrop-shadow-lg w-full">
            <img
              src="/ganjar.jpg"
              alt="Ganjar"
              class="rounded-lg mx-auto hover:scale-110  hover:shadow-lg"
            />
          </div>
          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg mt-3">
            <span class="text-black font-mono text-center font-semibold text-xl mx-8 mt-3">
              H. Ganjar Pranowo, S.H., M.I.P.
            </span>
          </div>
          <div class="bg-white flex flex-auto rounded-xl h-autodrop-shadow-lg  mt-3">
            <span class=" selection:bg-fuchsia-300 selection:text-fuchsia-900 text-lg ">
              H. Ganjar Pranowo, S.H., M.I.P. (lahir 28 Oktober 1968) adalah
              seorang politisi yang saat ini menjabat sebagai Gubernur Jawa
              Tengah selama dua periode sejak 23 Agustus 2013. Sebelumnya, ia
              merupakan anggota Dewan Perwakilan Rakyat dari Fraksi PDI
              Perjuangan periode 2004–2009 dan 2009–2013. Ia juga sedang
              menjabat sebagai Ketua Umum Keluarga Alumni Universitas Gadjah
              Mada (Kagama) selama dua periode, yaitu 2014–2019 dan 2019–2024;
              sekaligus Ketua Umum Persatuan Radio TV Publik Daerah Seluruh
              Indonesia Pada 21 April 2023, Ganjar Pranowo ditunjuk oleh PDIP
              sebagai calon Presiden Indonesia 2024.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
