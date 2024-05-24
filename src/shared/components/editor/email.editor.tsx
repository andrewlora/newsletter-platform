"use client";
import { saveEmail } from "@/actions/save.email";
import { DefaultJsonData } from "@/assets/mails/default";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import toast from "react-hot-toast";

const EmailEdit = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  const exportHtml = () => {
    const unLayer = emailEditorRef.current?.editor;

    unLayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
    });
  };

  const onReady: EmailEditorProps["onReady"] = () => {
    const unLayer: any = emailEditorRef.current?.editor;
    unLayer.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unLayer = emailEditorRef.current?.editor;

    unLayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        toast.success(res.message);
        history.push("/dashboard/write");
      });
    });
  };

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailEdit;
