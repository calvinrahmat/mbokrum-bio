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
        Satu Makanan Untuk Berbagai Acara!
      </p>
    </div>
  );
};

export default ProfileHeader;

