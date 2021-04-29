from app import mongo
from utils.restrictions import restrictions
from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid