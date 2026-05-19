import { NextResponse } from 'next/server';
import { ai } from '@/lib/gemini';

export async function POST(request) {
  try {
    // 1. Validasi API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          error: 'GEMINI_API_KEY belum dikonfigurasi di file .env lokal Anda.',
        },
        { status: 500 }
      );
    }

    // 2. Parse request body
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { success: false, error: 'Format body request harus berupa JSON.' },
        { status: 400 }
      );
    }

    const { prompt, messages, systemInstruction, temperature, model } = body;

    // 3. Persiapkan parameter `contents` untuk Gemini API
    let contents;

    if (messages && Array.isArray(messages)) {
      if (messages.length === 0) {
        return NextResponse.json(
          { success: false, error: 'Array messages tidak boleh kosong.' },
          { status: 400 }
        );
      }
      
      // Normalisasi format messages agar kompatibel dengan Gemini SDK
      contents = messages.map((msg) => {
        // Gemini mengharuskan role berupa 'user' atau 'model'
        let role = msg.role;
        if (role === 'assistant' || role === 'bot' || role === 'system') {
          role = 'model';
        } else if (role !== 'user' && role !== 'model') {
          role = 'user';
        }

        // Ambil konten teks
        let text = '';
        if (msg.content) {
          text = msg.content;
        } else if (msg.text) {
          text = msg.text;
        } else if (Array.isArray(msg.parts)) {
          const textPart = msg.parts.find(p => p.text !== undefined);
          text = textPart ? textPart.text : '';
        }

        return {
          role,
          parts: [{ text }],
        };
      });
    } else if (prompt && typeof prompt === 'string') {
      contents = prompt;
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Harap sertakan parameter "prompt" (string) atau "messages" (array) pada body request.',
        },
        { status: 400 }
      );
    }

    // 4. Konfigurasi opsional
    const config = {};
    if (systemInstruction && typeof systemInstruction === 'string') {
      config.systemInstruction = systemInstruction;
    }
    if (temperature !== undefined && typeof temperature === 'number') {
      config.temperature = temperature;
    }
    if (body.responseMimeType && typeof body.responseMimeType === 'string') {
      config.responseMimeType = body.responseMimeType;
    }

    // Pilih model: gunakan gemini-2.5-flash sebagai default terbaru yang didukung.
    // Jika user secara eksplisit meminta gemini-1.5-flash (yang sudah retired/404), kita alihkan ke gemini-2.5-flash.
    let selectedModel = model || 'gemini-2.5-flash';
    if (selectedModel === 'gemini-1.5-flash') {
      selectedModel = 'gemini-2.5-flash';
    }

    // 5. Panggil Google Gemini API
    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: Object.keys(config).length > 0 ? config : undefined,
    });

    // 6. Return response
    return NextResponse.json({
      success: true,
      text: response.text,
    });
  } catch (error) {
    console.error('API Route AI Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan internal server saat menghubungi Gemini API.',
      },
      { status: 500 }
    );
  }
}
