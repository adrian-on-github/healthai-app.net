import { cn } from "@/lib/utils";

export const AvatarCircles = ({ className, avatarImages }) => {
  return (
    <div className={cn("z-10 flex -space-x-6 rtl:space-x-reverse", className)}>
      {avatarImages.map((image, index) => (
        <img
          key={index}
          className="h-14 w-14 rounded-full border-3 border-white"
          src={image.image}
          width={40}
          height={40}
          alt={`Testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
};
