import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    // Set tanggal otomatis
    document.getElementById('activityDate').value = new Date().toISOString().slice(0, 10);

    document.getElementById('truckActivityForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        document.getElementById('loadingIndicator').style.display = 'block';
        
        const formData = new FormData(e.target);
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
            
            // [Include all other fields from your form]
            
            // Metadata
            timestamp: serverTimestamp()
        };

        try {
            await addDoc(collection(db, "truck_activities"), activityData);
            
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('loadingIndicator').style.display = 'none';
            
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 3000);
            
            // Reset form kecuali tanggal
            e.target.reset();
            document.getElementById('activityDate').value = new Date().toISOString().slice(0, 10);
            
        } catch (error) {
            console.error("Error saving document: ", error);
            document.getElementById('loadingIndicator').style.display = 'none';
            alert("Gagal menyimpan data: " + error.message);
        }
    });
});
