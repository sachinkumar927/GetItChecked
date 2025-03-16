from flask import Flask, request, jsonify
from twilio.rest import Client
import random

# Twilio credentials
TWILIO_ACCOUNT_SID = 'your_account_sid'
TWILIO_AUTH_TOKEN = 'your_auth_token'
TWILIO_PHONE_NUMBER = 'your_twilio_phone_number'

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Generate OTP
def generate_otp():
    return random.randint(100000, 999999)

@app.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    phone_number = data.get('phone_number')
    
    if not phone_number:
        return jsonify({'error': 'Phone number is required'}), 400

    otp = generate_otp()
    message = f"Your OTP is: {otp}"

    try:
        client.messages.create(
            body=message,
            from_=TWILIO_PHONE_NUMBER,
            to=phone_number
        )
        return jsonify({'message': 'OTP sent successfully', 'otp': otp}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
