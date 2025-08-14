import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Fungsi utama
const initForm = () => {
    // Set tanggal otomatis
    const dateInput = document.getElementById('activityDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().slice(0, 10);
    }

    const form = document.getElementById('truckActivityForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const loadingIndicator = document.getElementById('loadingIndicator');
        const successMessage = document.getElementById('successMessage');
        
        if (loadingIndicator) loadingIndicator.style.display = 'block';

        try {
            const formData = new FormData(form);
            const activityData = {
                // Informasi Umum
                tanggal: formData.get('activity_date'),
                jo: formData.get('jo'),
                nopol: formData.get('nopol'),
                booster: formData.get('booster'),
                
                // Aktivitas Truk
                truck_arrival1: formData.get('truck_arrival1'),
                truck_arrival2: formData.get('truck_arrival2'),
                scales_wo_alumina1: formData.get('scales_wo_alumina1'),
                scales_wo_alumina2: formData.get('scales_wo_alumina2'),
                parking1: formData.get('parking1'),
                parking2: formData.get('parking2'),
                
                // [Tambahkan semua field lainnya di sini]
                
                // Metadata
                timestamp: serverTimestamp()
            };

            await addDoc(collection(db, "truck_activities"), activityData);
            
            if (successMessage) {
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
            
            // Reset form
            form.reset();
            if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
            
        } catch (error) {
            console.error("Error saving document:", error);
            alert(`Gagal menyimpan data: ${error.message}`);
        } finally {
            if (loadingIndicator) loadingIndicator.style.display = 'none';
        }
    });
};

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', initForm);
