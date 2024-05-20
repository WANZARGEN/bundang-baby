import Link from "next/link";

export default function Landing() {
    return (
      <>
      <h2>Welcome to BunBeBe</h2>
      <Link href="/auth/sign-in">Sign In</Link>
      </>
    );
  }
  