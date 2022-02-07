import { useEffect } from "react";
import { useRouter } from 'next/router'
import { v4 as uuidV4 } from "uuid";
import AdminTemplate from "../../../components/templates/admin-template/admin-template";

export default function NewDocument() {
  const router = useRouter();
  
  useEffect(() => {
    const hash = uuidV4();
    const route = `/admin/document/${hash}`;
    router.push(route);
  }, []);

  return (
    <AdminTemplate>
      Criando novo documento...
    </AdminTemplate>
  )
}
