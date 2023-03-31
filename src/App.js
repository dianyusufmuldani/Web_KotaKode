import { useEffect, useState } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import CardImageFm from "./components/cardImageFm";
import CardSolution from "./components/cardSolution";
import CardTotal from "./components/cardTotal";
import FooterApp from "./components/footer";
import HeaderApp from "./components/header";
import {
  dataSolution,
  dataFramwork,
  dataLanguageProgram,
  dataPeliput,
} from "./dataWeb";

function App() {
  const [showButtonScroll, setShowButtonScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position >= 350) {
      setShowButtonScroll(true);
    } else {
      setShowButtonScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="flex flex-col items-center">
      <HeaderApp />
      <br />
      <br />
      <br />
      <br />
      <br />
      {showButtonScroll ? (
        <button
          onClick={handleScrollOnTop}
          className="flex z-20 fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-md text-sm items-center justify-center hover:bg-green-400"
        >
          <AiOutlineVerticalAlignTop size={25} />
          Kembali ke Atas
        </button>
      ) : null}
      <div className="w-[85%] ">
        <div className="flex">
          <div className="w-[55%] z-10">
            <h1 className="text-5xl font-bold">
              Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia
            </h1>
            <br />
            <p className="w-[70%] text-black/70">
              Ikutan diskusi forum tanya jawab, tulis blog dan Membangun
              portofolio semua di Kotakode
            </p>
            <div className="flex gap-4">
              <input
                placeholder="Masukkan Email Kamu"
                className="outline outline-1 outline-black/50 rounded w-[200px] px-2 py-3 focus:outline-orange-600 focus:outline"
              />
              <a
                href="https://www.kotakode.com/users/signup?email="
                className="bg-orange-500 text-white px-5 py-2 items-center flex"
              >
                <button>Daftar</button>
              </a>
            </div>
            <br />
            <br />
            <div className="flex gap-3">
              <CardTotal title={"29870"} description={"User Bergabung"} />
              <CardTotal title={"1078"} description={"Blog Ditulis"} />
              <CardTotal
                title={"19989"}
                description={"Total Pertanyaan & Jawaban"}
              />
            </div>
          </div>
          <img
            src="https://www.kotakode.com/static/media/globe.75274cb3.gif"
            width={500}
            height={500}
            alt="globe"
            className="-ml-[80px]"
          />
        </div>
        <div className="bg-greenKotaKode rounded-2xl grid grid-cols-3 gap-10 px-10 pt-10 pb-20 relative">
          <img
            src="https://www.kotakode.com/static/media/orangeDot.976c60df.svg"
            width={130}
            height={130}
            alt="image1"
            className="absolute right-10 bottom-20"
          />
          <div className="justify-between flex flex-col ">
            <div className="bg-white rounded-3xl grid grid-cols-3 p-5 flex items-center">
              <img
                src="https://www.kotakode.com/static/media/illustrasi-landing-2-min.7e571b39.png"
                width={70}
                height={70}
                alt="Jawab cepat"
              />
              <div className="col-span-2">
                <h6 className="font-bold">Jawaban cepat, tepat & gratis</h6>
                <p className="text-sm">
                  Dapatkan jawaban dalam hitungan menit dari ribuan programmer
                  lainnya.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl grid grid-cols-3 p-5 flex items-center">
              <img
                src="https://www.kotakode.com/static/media/illustrasi-landing-3-min.827f5eb7.png"
                width={100}
                height={100}
                alt="Jawab cepat"
              />
              <div className="col-span-2">
                <h6 className="font-bold">Konsep Gamifikasi</h6>
                <p className="text-sm">
                  Dapatkan badge menarik yang akan meningkatkan personal
                  branding kamu sebagai seorang programmer.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-3 items-center flex flex-col">
            <img
              src="https://www.kotakode.com/static/media/illustrasi-landing-4-min.b38b89e3.png"
              width={180}
              height={180}
              alt="Jawab cepat"
            />
            <br />
            <h6 className="font-bold">Bangun Online Portofolio</h6>
            <br />
            <p className="text-center text-sm">
              Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang.
              Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu
              adalah programmer yang berkualitas.
            </p>
          </div>
          <div className="text-white  mr-4">
            <h3 className="text-5xl font-bold">
              Mengapa perlu menggunakan Kotakode?
            </h3>
            <br />
            <br />
            <p className="text-xl">
              Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
              memberikan fasilitas guna mensejahterakan kehidupan penduduknya.
            </p>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 flex items-center ">
          <div className="relative">
            <img
              src="https://www.kotakode.com/static/media/greenDot.7e463379.svg"
              width={120}
              height={120}
              alt="image2"
              className="absolute left-0 -top-8"
            />
            <h2 className="text-5xl w-[70%] font-bold">
              Satu Platform, Banyak Solusi
            </h2>
            <br />
            <br />
            <p>
              Kotakode memfasilitasi dengan memberikan berbagai fitur yang
              menarik dan terbaik untuk mengembangkan ekosistem IT anak bangsa.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-[90%]">
              {dataSolution.map((item, index) => {
                return (
                  <CardSolution
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    textButton={item.textButton}
                    status={item.status}
                    id={item.id}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[100%] flex flex-col  h-[100vh]  justify-center mt-[100px]">
        <img
          src="https://www.kotakode.com/static/media/telegramBG.26676839.svg"
          width={"100%"}
          height={"100%"}
          alt="bg telegram"
          className="absolute top-10"
        />
        <div className="z-10 flex flex-col items-center">
          <img
            src="https://www.kotakode.com/static/media/telegram.f8b93910.svg"
            width={200}
            height={200}
            alt="telegram"
          />
          <h3 className="text-2xl font-bold">
            Gabung Komunitas Telegram Kotakode
          </h3>
          <p className="text-black/50">
            Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
            bersama mencapai tujuan yang besar
          </p>
          <br />
          <a href="http://t.me/kotakodebetachat">
            <button className="bg-orange-500 text-white px-5 py-2 ">
              Ikutan Telegram!
            </button>
          </a>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold w-[42%]">
          Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di
          Seluruh Indonesia
        </h1>
        <br />
        <br />
        <p className="text-black/50">
          Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh
          Pengembangan Proyek
        </p>
        <br />
        <div className="flex gap-3">
          {dataFramwork.map((item, index) => {
            return <CardImageFm title={item.title} image={item.image} />;
          })}
        </div>

        <br />
        <div className="flex gap-3">
          {dataLanguageProgram.map((item, index) => {
            return <CardImageFm title={item.title} image={item.image} />;
          })}
        </div>
        <br />
        <a href="https://www.kotakode.com/pertanyaan/tanya">
          <button className="bg-orange-500 text-white px-5 py-2 ">
            Ajukan Pertanyaan
          </button>
        </a>

        <br />
        <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold w-[42%]">Diliput Oleh</h1>
        <br />
        <br />
        <div className="flex gap-10">
          {dataPeliput.map((item, index) => {
            return (
              <div className="w-[150px]  flex items-center justify-center">
                <a href={item.link}>
                  <img
                    src={item.image}
                    width={"100%"}
                    height={"100%"}
                    alt="peliput"
                    className={`${item.name === "cnn" ? "w-[70px]" : ""}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <FooterApp />
    </div>
  );
}

export default App;
