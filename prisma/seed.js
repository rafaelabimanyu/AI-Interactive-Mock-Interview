import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up existing data...');
  await prisma.interviewLog.deleteMany({});
  await prisma.interviewSession.deleteMany({});
  await prisma.portfolio.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Seeding database...');

  // 1. Create Siswa (Student)
  const siswa = await prisma.user.create({
    data: {
      name: 'Rian Hidayat',
      email: 'rian.siswa@smk.sch.id',
      role: 'siswa',
      jurusan: 'Rekayasa Perangkat Lunak (RPL)',
      target_jalur: 'kerja_smk',
    },
  });

  // 2. Create Guru BK (Counselor)
  const guruBk = await prisma.user.create({
    data: {
      name: 'Siti Rahmawati, S.Pd.',
      email: 'siti.rahma@smk.sch.id',
      role: 'guru_bk',
      jurusan: 'Bimbingan Konseling',
      target_jalur: 'kerja_smk', // Default / fallback
    },
  });

  console.log(`Created users: ${siswa.name} (Siswa), ${guruBk.name} (Guru BK)`);

  // 3. Create Portfolio for Student
  const portfolio = await prisma.portfolio.create({
    data: {
      userId: siswa.id,
      rawData: 'Saya sering membuat web portofolio kecil menggunakan HTML dan CSS saat kelas 11. Saya juga pernah mengikuti PKL selama 3 bulan di PT Maju Mundur sebagai web developer magang, menggarap frontend interface admin dashboard.',
      polishedJson: JSON.stringify({
        summary: 'Siswa SMK jurusan Rekayasa Perangkat Lunak dengan pengalaman magang selama 3 bulan sebagai Junior Web Developer di PT Maju Mundur.',
        experience: [
          {
            role: 'Web Developer Intern',
            company: 'PT Maju Mundur',
            duration: '3 Bulan',
            description: 'Mengembangkan visual layout interface halaman dashboard administrasi internal menggunakan React dan Tailwind CSS.'
          }
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React UI Integration'],
        star_format: {
          situation: 'Mengikuti PKL di PT Maju Mundur dan ditugaskan untuk memperbaiki tampilan dashboard admin.',
          task: 'Meningkatkan user experience serta meresponsifkan dashboard admin internal.',
          action: 'Mengimplementasikan framework modern React serta merestrukturisasi styling dengan Tailwind CSS.',
          result: 'Dashboard lebih responsif diakses lewat ponsel dan menaikkan efisiensi navigasi admin hingga 30%.'
        }
      }, null, 2),
    },
  });

  console.log(`Created portfolio for Rian Hidayat`);

  // 4. Create Interview Session
  const session = await prisma.interviewSession.create({
    data: {
      userId: siswa.id,
      bidangPosisi: 'Junior Frontend Developer',
      scoreTotal: 85,
      feedbackJson: JSON.stringify({
        overall_feedback: 'Secara garis besar Rian sudah memiliki pemahaman dasar React yang baik, namun perlu melatih artikulasi jawaban agar terdengar lebih percaya diri dan terstruktur menggunakan metode STAR.',
        competencies: {
          komunikasi: 78,
          teknis: 88,
          problem_solving: 85,
          sikap_kerja: 90
        },
        strengths: [
          'Menguasai konsep dasar framework React',
          'Pengalaman magang riil yang sangat menunjang posisi',
          'Sikap santun dan profesional'
        ],
        improvements: [
          'Kurangi kata pengisi seperti "aaa", "eee"',
          'Lebih detail saat menjelaskan bagian Action pada metode STAR'
        ]
      }, null, 2),
    },
  });

  // 5. Create Interview Logs (Dialog between AI and Student)
  await prisma.interviewLog.createMany({
    data: [
      {
        sessionId: session.id,
        speaker: 'ai',
        textContent: 'Halo Rian, selamat datang di sesi wawancara simulasi hari ini. Bisa ceritakan latar belakang singkat Anda dan mengapa Anda melamar posisi Junior Frontend Developer?',
        sequenceOrder: 1,
      },
      {
        sessionId: session.id,
        speaker: 'siswa',
        textContent: 'Halo Pak/Bu, nama saya Rian Hidayat dari SMK jurusan RPL. Saya ingin menjadi Frontend Developer karena saya suka membuat tampilan web yang interaktif dan mudah digunakan oleh user.',
        sequenceOrder: 2,
      },
      {
        sessionId: session.id,
        speaker: 'ai',
        textContent: 'Bagus. Selama magang di PT Maju Mundur, kontribusi terbesar apa yang sudah Anda berikan untuk tim?',
        sequenceOrder: 3,
      },
      {
        sessionId: session.id,
        speaker: 'siswa',
        textContent: 'Waktu magang saya diberi tugas mendesain ulang dashboard admin. Dashboard sebelumnya lambat dan tidak responsif. Saya mengoptimalkannya menggunakan Tailwind CSS dan membagi component React sehingga load web jadi lebih cepat.',
        sequenceOrder: 4,
      },
    ],
  });

  console.log(`Created interview session & dialog logs for Rian Hidayat`);
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
