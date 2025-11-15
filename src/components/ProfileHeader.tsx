import Image from "next/image";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Logo - Portrait for both mobile and desktop */}
      <div className="w-32 h-32 md:w-40 md:h-40 relative mb-4">
        <Image
          src="/logo_portrait.png"
          alt="Mbokrum Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-center max-w-md text-white/90 mb-4 text-base md:text-xl" style={{ fontFamily: 'Philosopher, serif' }}>
        Mbokrum hadir membawa hidangan praktis penuh cita rasa untuk melengkapi setiap acara spesial kalian!
      </p>
    </div>
  );
};

export default ProfileHeader;

