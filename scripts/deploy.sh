#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Deploying to Vercel..."
vercel --prod

echo "Deployment initiated."
