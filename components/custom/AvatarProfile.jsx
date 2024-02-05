import PropTypes from "prop-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarProfile({ src, alt, name, fallback, matricNo }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Avatar className="h-[150px] w-[150px]">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <p className="text-[32px] font-bold text-primaryBlue">{name}</p>
      <p className="text-[32px] font-bold text-primaryGray">{matricNo}</p>
    </div>
  );
}

AvatarProfile.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  matricNo: PropTypes.string.isRequired,
};

export default AvatarProfile;
