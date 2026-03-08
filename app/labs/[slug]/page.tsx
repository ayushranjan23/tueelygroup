import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function LabsSlugRedirectPage({ params }: Props) {
  redirect(`/tg-research/${params.slug}`);
}
