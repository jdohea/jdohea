import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card-style";
import Image from "next/image";
import Link from "next/link";

export default function MyInfoCard({ className }: { className?: string }) {
  return (
    <div className={cardStyle + className}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          <CardTitle title="KREATORDEV" />
          <p className="text-xl font-normal mt-4">Ayoub Kremcht</p>
        </div>
        <Image
          className="w-[55px] h-[69px] hidden 2xs:block"
          src="/me/avatar.png"
          alt="Ayoub Kremcht"
          width={80}
          height={100}
        />
      </div>
      <p className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
        A software developer from Morocco interested in building apps as
        solutions.
      </p>
      <Link href="/about" className="hover:animate-scale">
        <CardButton title="LEARN MORE" />
      </Link>
    </div>
  );
}
