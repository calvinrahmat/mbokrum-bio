import Image from "next/image";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Logo - Portrait for both mobile and desktop */}
      <div className="w-56 h-56 md:w-72 md:h-72 relative ">
        <Image
          src="/logo_portrait.png"
          alt="Mbokrum Logo"
          fill
          className="object-contain"
          priority
          unoptimized={true}
        />
      </div>
      <p className="text-center max-w-md text-white/90 mb-4 text-base md:text-xl" style={{ fontFamily: 'Philosopher, serif' }}>
        Mbokrum berdiri sejak tahun 2019 dengan visi untuk menghadirkan kembali cita rasa tradisional yang semakin jarang ditemui di tengah pesatnya perkembangan ibu kota. 
Dengan dukungan dapur berskala komersial, kami mengolah setiap bahan baku secara higienis dan terstandar, sehingga mampu menghasilkan hidangan yang berkualitas dan konsisten. 
Mbokrum menghadirkan pilihan  paket untuk menemani beragam rangkaian acara mulai dari ulang tahun, kegiatan kantor, syukuran, pernikahan, hingga berbagai momen spesial lainnya.!
      </p>
    </div>
  );
};

export default ProfileHeader;

