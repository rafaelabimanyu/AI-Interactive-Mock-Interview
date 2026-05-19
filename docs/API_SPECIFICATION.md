# Spesifikasi API AI INTERVIEW.AI

Berkas ini berisi spesifikasi teknis endpoint API internal `/api/ai` yang digunakan untuk berkomunikasi dengan model kecerdasan buatan Google Gemini.

---

## 📡 Endpoint: `/api/ai`

Endpoint ini menerima data perintah tunggal (`prompt`) atau riwayat chat (`messages`) serta instruksi sistem (`systemInstruction`) untuk diproses menggunakan model `gemini-2.5-flash`.

- **URL**: `/api/ai`
- **Metode HTTP**: `POST`
- **Headers**:
  - `Content-Type: application/json`

---

## 📥 Struktur Request Body (JSON)

API mendukung beberapa konfigurasi opsional berikut:

```json
{
  "prompt": "Nama Siswa: Budi Santoso\nJurusan: RPL\nPengalaman Mentah...",
  "messages": [
    { "role": "user", "content": "Pertanyaan 1" },
    { "role": "model", "content": "Jawaban 1" }
  ],
  "systemInstruction": "Kamu adalah penguji wawancara...",
  "temperature": 0.2,
  "responseMimeType": "application/json"
}
```

### Parameter:
1. `prompt` (*string*, conditional): Masukan teks utama. Wajib diisi jika `messages` kosong.
2. `messages` (*array*, conditional): Riwayat percakapan. Wajib diisi jika `prompt` kosong.
3. `systemInstruction` (*string*, opsional): Aturan peran dan instruksi pembatas model.
4. `temperature` (*number*, opsional): Kontrol tingkat kreativitas model (skala 0.0 - 2.0).
5. `responseMimeType` (*string*, opsional): Diatur ke `"application/json"` jika ingin memaksa model membalas dengan format JSON murni.

---

## 📤 Skema Response (JSON)

### 1. Response Berhasil (Umum)
```json
{
  "success": true,
  "text": "{\n  \"key\": \"value\"\n}"
}
```
*Catatan: Konten JSON hasil olahan AI tersimpan di dalam properti string `text`.*

### 2. Response Gagal
```json
{
  "success": false,
  "error": "Pesan kesalahan detail..."
}
```

---

## ⚙️ Integrasi Modul Aplikasi

### A. Modul Portofolio & CV Builder (Fase 4)
- **System Instruction**:
  ```text
  Kamu adalah seorang HRD profesional dan ahli pembuat CV ATS-friendly. Tugasmu adalah mengubah data pengalaman kasual siswa SMK/SMA berikut menjadi poin-poin kompetensi formal menggunakan Metode STAR (Situation, Task, Action, Result). Jawablah LANGSUNG dalam format JSON terstruktur dengan key: 'ringkasan_profil', 'keahlian' (array), 'pengalaman_star' (array of objects dengan key: posisi, perusahaan, deskripsi_star yang merupakan objek dengan key: situasi, tugas, tindakan, hasil).
  ```
- **Struktur JSON Hasil Pemrosesan AI** (isi properti `text`):
  ```json
  {
    "ringkasan_profil": "Siswa kompeten bidang pemrograman...",
    "keahlian": ["Analisis Sistem", "Merakit Komputer"],
    "pengalaman_star": [
      {
        "posisi": "Teknisi Komputer",
        "perusahaan": "Bengkel Laptop",
        "deskripsi_star": {
          "situasi": "Ditugaskan melayani diagnosis laptop...",
          "tugas": "Mengurangi keterlambatan waktu diagnosis...",
          "tindakan": "Melakukan diagnosis berkala secara sistematis...",
          "hasil": "Meningkatkan tingkat keberhasilan servis hingga 90%..."
        }
      }
    ]
  }
  ```

### B. Modul AI Score Card Wawancara (Fase 6)
- **System Instruction**:
  ```text
  Kamu adalah seorang HRD professional dan penguji simulasi wawancara kerja. Analisis riwayat pertanyaan dan jawaban wawancara siswa berikut. Berikan penilaian objektif dalam format JSON murni dengan key: 'score_total' (integer 1-100), 'status' (string: Lolos / Belum Lolos), 'kekuatan' (array of strings), dan 'saran_perbaikan' (array of strings). Jangan berikan teks markdown selain JSON.
  ```
- **Struktur JSON Hasil Pemrosesan AI** (isi properti `text`):
  ```json
  {
    "score_total": 85,
    "status": "Lolos",
    "kekuatan": [
      "Mampu mengartikulasikan metode STAR dengan runtut",
      "Memiliki rasa percaya diri yang tinggi dalam berkomunikasi"
    ],
    "saran_perbaikan": [
      "Perlu memperdalam detail teknis pada bagian tindakan",
      "Gunakan intonasi yang lebih stabil"
    ]
  }
  ```
