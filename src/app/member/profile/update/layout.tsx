import PopUpTopNavBar from "@/app/_components/navigation/PopUpTopNavBar";

export default function ProfileUpdateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PopUpTopNavBar title="Edit Profile" />
      <div>{children}</div>
    </div>
  );
}