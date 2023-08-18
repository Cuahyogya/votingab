import React from "react";
import Footer from "./Footer";
import NavbarDashboard from "./NavbarDashboard";

const LandingPage = () => {
  return (
    <div className="bg-slate-200">
      <NavbarDashboard />

      <h1 className="mt-10 mx-4 md:mx-12 text-4xl font-bold">
        Vote your candidate
      </h1>
      <div className="mb-10 p-2 flex flex-col md:flex-row md:h-autodrop-shadow-lg w-full">
        <p className="mt-6 mx-4  md:mx-8 md:mt-10 mb-7 text-base md:text-2xl font-normal text-slate-950 text-justify">
          Sagara Technology adalah perusahaan teknologi lokal yang berkecimpung
          dalam pembuatan dan pengembangan perangkat lunak, website development,
          pembuatan aplikasi untuk Android dan iOS, serta menjadi konsultan dan
          penyedia pelatihan untuk SDM-SDM dalam bidang IT. Berdiri pada tahun
          2014, perusahaan ini adalah prakarsa dari Adi Arriansyah yang
          merupakan alumni Telkom University, Bandung.
          <br></br>
          <br></br>
          Sampai saat ini perusahaan teknologi tersebut udah merilis ratusan
          aplikasi website serta puluhan aplikasi mobile. Para kliennya pun
          terdiri dari korporasi besar di dalam dan luar negeri, BUMN, dan
          lembaga pemerintah lainnya. Ini antara lain Ruangguru, Qlue,
          Kementerian Energi dan Sumber Daya Mineral, Kementerian Kesehatan,
          Kementerian Pendidikan dan Kementerian Perhubungan dan Transportasi.
        </p>

        <img
          src="/pancasila.png"
          alt="Garuda"
          className="rounded-lg mt-6 md:mt-10 mb-10 md:mb-0 mx-auto h-60 md:h-100"
        />
      </div>
      <div className="flex flex-auto rounded-xl h-5 md:h-autodrop-shadow-lg w-full"></div>

      <Footer />
    </div>
  );
};

export default LandingPage;
