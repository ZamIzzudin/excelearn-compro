/** @format */

export default function Visi() {
  return (
    <div className="w-full text-center py-[5%] px-[10%] space-y-10">
      <h2 className="font-[600] text-[49px]">Our Vision and Mission</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-stretch justify-end">
          <div className="border-3 max-w-[50%] p-5 rounded-md flex items-center justify-center flex-col gap-5">
            <h3 className="font-[600] text-[24px]">Visi</h3>
            <p>
              Menjadi pusat unggulan dalam pengembangan sumber daya manusia,
              teknologi, dan solusi bisnis yang berkualitas
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-start">
          <div className="border-3 max-w-[50%] p-5 rounded-md flex items-center justify-center flex-col gap-5">
            <h3 className="font-[600] text-[24px]">Misi</h3>
            <p>
              Penyedia jasa pelatihan bisnis dan informasi teknologi serta
              layanan IT Managed Services untuk meningkatkan produktivitas kerja
              dan fokus bisnis pelanggan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
