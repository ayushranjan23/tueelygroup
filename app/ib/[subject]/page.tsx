import { notFound, redirect } from "next/navigation";
import { DEFAULT_IB_SECTION, getIbSubject, ibSubjects } from "../content";

type SubjectPageProps = {
  params: {
    subject: string;
  };
};

export function generateStaticParams(): SubjectPageProps["params"][] {
  return ibSubjects.map((subject) => ({ subject: subject.slug }));
}

export default function IbSubjectRedirectPage({ params }: SubjectPageProps) {
  const subject = getIbSubject(params.subject);
  if (!subject) {
    notFound();
  }

  redirect(`/ib/${subject.slug}/${DEFAULT_IB_SECTION}`);
}
