export interface Prompt {
  id: number;
  title: string;
  category: 'Photography' | 'Realistic' | 'Anime' | 'Cinematic' | 'Product' | 'Fashion' | 'Portrait' | 'UI Design' | 'Logo Design' | 'Other';
  image: string;
  prompt: string;
  likes: number;
  views: number;
  copies: number;
  tags: string[];
}

export const prompts: Prompt[] = [
  {
    id: 1,
    title: "2000's Filter",
    category: "Cinematic",
    image: "/1.jpg",
    prompt: "Apply a realistic early-2000s digital camera (2002 digicam) aesthetic to the input image. Add direct on-camera flash effect: harsh frontal lighting, overexposed skin highlights, flat shadows, strong highlight bloom and halation around bright areas. Introduce slight motion blur from hand shake, soft focus, and imperfect autofocus. Reduce sharpness to mimic a low-end CCD sensor. Add visible digital noise, grain, and compression artifacts. Lower dynamic range: blown-out whites, crushed blacks, washed-out contrast. Color grading should feel inaccurate and dated: slight green-yellow tint, uneven white balance, subtle color banding, and plasticky skin tones. Lens imperfections: mild chromatic aberration, edge softness, slight blur, and cheap lens quality. Add a subtle dreamy glow/haze across the image, especially around lights and skin. Framing should feel imperfect and candid: slightly off-center, like a casual snapshot. Overall look: authentic 2000–2005 point-and-shoot camera photo, nostalgic, amateur, unpolished, raw. “do not change composition, pose, or subject identity” “preserve original scene, only apply visual style",
    likes: 1245,
    views: 8900,
    copies: 432,
    tags: ["cyberpunk", "neon", "city", "night", "sci-fi"]
  },
  {
    id: 2,
    title: "VHS Glitch",
    category: "Other",
    image: "/2.jpg",
    prompt: "Overlay strong VHS tape distortion while preserving original image clarity underneath. Include subtle jittering horizontal tears, warped frame edges, rainbow chroma shifts, grain, and static bursts. Subtle crushed shadows with purple-blue hues. Maintain photo identity — only add film degradation.",
    likes: 856,
    views: 4200,
    copies: 215,
    tags: ["minimalist", "watch", "product", "clean", "studio"]
  },
  {
    id: 3,
    title: "Y2K Flash",
    category: "Other",
    image: "/3.jpg",
    prompt: "Enhance the uploaded image with a Y2K selfie vibe while preserving all original elements. Strong flash blowout on face, over-sharpened edges, high-contrast highlights, slightly magenta skin tint, shallow dynamic range. Low-resolution nostalgic youth energy. Negative Prompt: Do not change facial identity, body shape, pose, or objects.",
    likes: 2100,
    views: 12500,
    copies: 890,
    tags: ["anime", "portrait", "magical", "stars", "fantasy"]
  },
  {
    id: 4,
    title: "3GS Cam",
    category: "Fashion",
    image: "/4.jpg",
    prompt: "Transform the uploaded image into a realistic iPhone 3GS camera photo. Keep all features, clothing, framing, and pose identical to the reference. Apply: Very soft overall focus with noticeable blur and pixel softness, heavier noise and compression artifacts, low dynamic range, washed-out highlights, desaturated colors with a greenish cast, slight motion blur look even when still, limited detail even in center focus, stronger vignetting.",
    likes: 945,
    views: 5600,
    copies: 180,
    tags: ["fashion", "editorial", "red dress", "desert", "avant-garde"]
  },
  {
    id: 5,
    title: "Soft VHS",
    category: "Other",
    image: "/5.jpg",
    prompt: "Apply a soft VHS tape effect to the uploaded image without altering the subject or composition. Add gentle scanlines, slight chromatic fringing on edges, soft focus blur, mild tape noise, and a subtle warm green tint. Slightly lowered contrast, softened details, and nostalgic analog softness.",
    likes: 1850,
    views: 10200,
    copies: 560,
    tags: ["portrait", "cinematic", "moody", "character", "detailed"]
  },
  {
    id: 6,
    title: "2000s Party Cam",
    category: "Other",
    image: "/6.jpg",
    prompt: "Apply an early-2000s house party digital camera flash aesthetic to the uploaded photo while preserving the original subject's face, hair, expression, pose, outfit, and background exactly. Simulate a cheap compact digital camera from 2003-2008 with direct on-camera flash: harsh, overblown frontal light with hot white highlights on the forehead, nose, and cheekbones, deep unflattering shadows under the chin and behind the subject, and complete background darkness beyond the flash range. Add visible red-eye effect in the pupils, slight motion blur on the edges as if the subject was caught mid-movement, low-resolution JPEG compression artifacts, oversaturated warm skin tones, and a faint yellowish color cast from mixed tungsten ambient and flash. Include slight lens flare and blown-out reflections on any jewelry, glasses, or glossy surfaces. Render with that unmistakable low-megapixel early digital look — grainy but sharp in the center, soft at the edges. Upscale while preserving the lo-fi digital texture. Hard rule: Do not change the face, hair, expression, pose, composition, or background.",
    likes: 620,
    views: 3100,
    copies: 410,
    tags: ["ui", "background", "abstract", "tech", "glassmorphism"]
  },
  {
    id: 7,
    title: "Side Sunlight",
    category: "Other",
    image: "/7.jpg",
    prompt: "Frontal side sunlight while fully preserving every original detail of the photo unchanged except for lighting and color mood. Enhance stray hair strands backlit by light. Strengthen facial definition with high-detail upscaling without altering features. Hard rule: Do not change the subject's face, hair, and background structure. Do not change the composition. Frontal side sunlight while fully preserving every original detail of the photo unchanged except for lighting and color mood. Enhance stray hair strands backlit by light. Strengthen facial definition with high-detail upscaling without altering features. Hard rule: Do not change the subject's face, hair, pose and background structure. Do not change the composition.",
    likes: 450,
    views: 2800,
    copies: 150,
    tags: ["logo", "minimalist", "tech", "ai", "vector"]
  },
  {
    id: 8,
    title: "Phone Flash",
    category: "Other",
    image: "/8.jpg",
    prompt: "Apply a realistic smartphone flash lighting effect to the uploaded mirror selfie while strictly preserving the original subject's face, identity, pose, framing, and background exactly as captured. The original image was taken without flash - simulate a phone flash firing from a small LED source near the phone camera, not a large camera strobe. Add a compact, controlled flash light that illuminates the skin evenly with soft but defined highlights on cheekbones, nose bridge, lips, shoulders, collarbone, and arms, with a natural falloff into shadow. The flash must NOT obscure, wash out, or block the face. Avoid large white flare circles or overexposed hotspots crossing the eyes, nose, or mouth. If visible, flash reflections should appear slightly off-axis (near the phone edge or mirror surface), subtle and realistic, never centered over facial features. Keep the background lighting unchanged and dark; the flash should primarily affect the subject and nearby reflective areas only.",
    likes: 1120,
    views: 6700,
    copies: 320,
    tags: ["food", "dessert", "macro", "realistic", "chocolate"]
  },
  {
    id: 9,
    title: "Disposable Flash",
    category: "Cinematic",
    image: "/9.jpg",
    prompt: "Apply a Fujifilm QuickSnap disposable camera aesthetic to the uploaded photo while preserving the original subject, pose, facial structure, and background. Simulate the fixed plastic lens with slight soft focus, mild barrel distortion at edges, and a subtle warm-green color cast typical of Fuji 400 film. Add direct built-in flash: a small, harsh frontal pop that creates bright but slightly uneven illumination across the subject with visible falloff at the edges of the frame. Include realistic film grain, slight overexposure on skin highlights, muted but warm shadows, and a faint light leak or subtle orange haze creeping in from one corner. Keep the background underexposed and slightly out of focus. Render with authentic analog texture — no digital sharpness, no clean lines. Add faint timestamp text in orange in the bottom-right corner with a date in MM/DD/YYYY format. Upscale while preserving the lo-fi fm texture. Hard rule: Do not change the face, hair, expression, pose, composition, or background.",
    likes: 2400,
    views: 14500,
    copies: 1100,
    tags: ["fantasy", "forest", "landscape", "magical", "epic"]
  },
  {
    id: 10,
    title: "Night Glow Flash",
    category: "Realistic",
    image: "/10.jpg",
    prompt: "Apply a bold night-flash aesthetic to the photo and remove the iPhone light glares, starburst patterns, light scattering, and diffraction spikes from night lights, while fully preserving original detail of the photo unchanged except for lighting, glow, and color mood. Do not brighten the background. Preserve direct on-camera flash on skin with strong light-shadow contrast and natural texture. Upscale if blurred. Add diffused sunbeams striking the skin, creating a glowing highlight on cheekbones, nose bridge, lips, and hair strands. Maintain clear separation between bright areas and soft, deep shadows to create a cinematic high-contrast mood. Inject subtle lens bloom, light haze, and a thin layer of atmospheric glow around the subject. Render skin with luminous translucency and gentle peachy tone. Enhance stray hair strands backlit by flash. Upscale the image if blurred. Hard rule: Do not change the face and hairs of the subject. Blow out subtle highlight areas on the forehead, nose tip, and cheekbones to mimic real paparazzi overexposure while keeping facial features fully readable. Add slight red-eye reduction glow in the pupils if eyes are visible. Maintain a cool-neutral white balance typical of undiffused flash in nighttime or indoor settings. Keep skin texture raw and unretouched - no smoothing, no beauty filter. Add faint motion blur to the edges only to simulate a fast-captured candid moment. Upscale with enhanced sharpness and detail. Hard rule: Do not change the face, hair, expression, pose, composition, or background.",
    likes: 890,
    views: 5400,
    copies: 270,
    tags: ["architecture", "interior", "minimalist", "brutalist", "design"]
  },
  {
    id: 11,
    title: "Gritty Film",
    category: "Other",
    image: "/11.jpg",
    prompt: "Apply gritty high-ISO film energy with Agfa Vista 800 inspiration. Saturated reds and warm shadows, pronounced grain texture, muted blue skies, edgy low-light feel. Keep original clarity while adding characterfully imperfect vintage film noise.",
    likes: 1540,
    views: 8200,
    copies: 340,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 12,
    title: "HK Neon",
    category: "Realistic",
    image: "/12.jpg",
    prompt: "Apply a Hong Kong movie aesthetic to the user uploaded image. Keep the subject exactly the same, unchanged in identity, pose, proportions, and outfit. Add a cinematic Hong Kong film look inspired by 1990s Wong Kar-wai and modern HK street cinema: deep emerald and crimson color tones, strong neon reflections, high contrast shadows, soft bloom around lights, slight motion blur on background edges, rich film grain, and subtle chromatic aberration. Lighting becomes moody and atmospheric, with warm-yellow practical lights mixed with cool teal ambient glow. Keep composition and background structure the same but stylize it with the HK-film palette and texture. Add gentle haze, vignette, and a nostalgic melancholy mood. Ultra high resolution, cinematic, realistic.",
    likes: 920,
    views: 5100,
    copies: 180,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 13,
    title: "Light Drag",
    category: "Other",
    image: "/13.jpg",
    prompt: "Apply a cinematic night-time long-exposure light-blur effect to the user uploaded photo. Keep the subject sharp and in clear focus while adding dynamic streaks of yellow and teal light across the background, as if captured with slow shutter speed and front-flash. Introduce soft glowing light trails, horizontal and diagonal motion streaks, and a subtle ghosted silhouette behind the subject to emphasize movement. Enhance ambient neon glow, light bleed, and atmospheric haze while preserving the original colors, outfit, and facial features. Overall mood: moody urban night photography with intentional motion drag and vivid light streaks.",
    likes: 2150,
    views: 11000,
    copies: 420,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 14,
    title: "Golden Spotlight Cinema",
    category: "Cinematic",
    image: "/14.jpg",
    prompt: "Remove all existing lighting and rebuild the scene from scratch with a cinematic lighting set. Use a primary narrow soft spotlight casting a dramatic golden beam from the front-left, slightly above the subject («38° elevation). The light should feel like a tight vertical slice, with soft feathered edges and strong cinematic rolloff. Color temperature is warm golden (around 4200K), creating painterly highlights and sculpted facial contours. Add a secondary ultra-soft diffused fill light from the top-front, extremely low intensity. This fill should keep shadows deep and dramatic while still readable, similar to moody arthouse films. The fill color leans cool and dark, preventing shadow crush while preserving atmosphere. Introduce low-level cool ambient environment light to subtly contrast the warm key light and add cinematic depth without flattening the image. Control shadows carefully: keep them soft but dense, raise the black floor slightly, add a subtle midtone lift, and boost overall cinematic depth so silhouettes feel rich, dimensional, and atmospheric. Enable atmospheric bloom around warm light zones only. The bloom should be golden, filmic, and hazy-never harsh-creating a glowing aura around highlights. Shoot this as if captured on an ARRI ALEXA Mini LF, upgraded to cinema-master quality. Use a large-format sensor look with extended dynamic range, soft cinematic highlight rolloff, strong color depth, and gentle shadow recovery. Apply a film response curve that blends ARRI color science with Kodak-style film latitude. Use an 85mm Master Prime lens with subtle anamorphic character. Background bokeh should be oval and cinematic, with gentle barrel distortion and strong microcontrast to enhance subject separation and depth falloff. Camera settings: ISO 64 1/120 shutter f/1.4 aperture Warm film-stock white balance Preserve natural skin texture completely. Do not smooth skin-retain pores and real micro-details, with only subtle microtexture enhancement. Apply cinematic softening only to the background to enhance depth cueing and subject isolation. Apply a cinematic color grade with strong warmth in highlights, a restrained teal tint in shadows, and a pronounced gold boost in bright areas. Use a deep cinematic S-curve contrast profile and ARRI-style film color science inspired by Vision3 stocks. Finish with subtle post-processing: Add gentle bloom with a controlled radius Apply Kodak 2383-style film grain that moves organically like real film Apply very light global and micro sharpness (never digital or harsh) Introduce a soft cinema depth haze to enhance atmospheric layering and dimensionality The image should feel painterly, cinematic, moody, and high-end, like a dramatic still frame from a prestige film shot on large-format cinema film.",
    likes: 1800,
    views: 9500,
    copies: 390,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 15,
    title: "Midnight Red",
    category: "Other",
    image: "/15.jpg",
    prompt: "Use the user uploaded image as the exact base reference. Apply a strong red aesthetic lighting effect, as if the scene is illuminated by a deep red neon light or traffic light glow at night. Lighting & color treatment: Cast a dominant red light source onto the subject's face, skin, and hair Red light should feel directional and realistic, not a flat color overlay Preserve natural shadows and depth while tinting highlights red Keep blacks deep and shadows rich for a cinematic night mood Slight warm red bloom around highlights, especially on cheekbones, nose bridge, lips, and hair strands Subtle red color spill onto nearby surfaces (car interior, background edges if visible) Mood & style: Editorial, cinematic, intimate night-time atmosphere Moody, quiet, slightly dramatic feel Looks like a candid photo taken inside a car under red street or brake lights Fashion editorial realism, not stylized illustration Quality & realism: Maintain realistic skin texture and facial details No plastic skin, no over smoothing Add very subtle film grain for cinematic texture Preserve original sharpness and depth of field Hard rules (must follow): Do NOT change the subject's face, facial structure, hair shape, body, or expression Do NOT change the pose, camera angle, framing, or crop Do NOT change the outfit or accessories Do NOT alter the background structure or objects Do NOT change the aspect ratio Only apply lighting, color grading, and mood enhancements Output should look like the original photo captured under dramatic red night lighting, cinematic and realistic.",
    likes: 670,
    views: 3200,
    copies: 120,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 16,
    title: "Y2K Flashback",
    category: "Fashion",
    image: "/16.jpg",
    prompt: "Transform the uploaded photo into an early 2000s Y2K digital camera look. Keep the person exactly the same with full identity lock. Add direct flash, slight overexposure, shiny highlights, compact camera sharpness, mild noise, nostalgic color tones, and casual party-photo energy. Preserve the original face, outfit, pose, and background. No face changes, no distortion.",
    likes: 1450,
    views: 7800,
    copies: 280,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 17,
    title: "Vintage Camera Flash",
    category: "Other",
    image: "/17.jpg",
    prompt: "Apply a DazzCam-inspired classic vintage film camera effect to the uploaded photo. Keep the subject’s face, identity, body, outfit, pose, and background unchanged. Add authentic 80s/90s film colors, soft contrast, natural film grain, slight color fading, subtle warm tones, gentle lens softness, and realistic analog camera texture. No face changes, no beautification, no distortion, no AI artifacts.",
    likes: 1980,
    views: 10500,
    copies: 450,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 18,
    title: "90s Tape Cam",
    category: "Other",
    image: "/18.jpg",
    prompt: "Apply a DazzCam-inspired VHS retro effect to the uploaded photo. Keep the subject’s identity, face, outfit, pose, and background unchanged. Add washed-out colors, visible analog noise, slight color bleeding, scanline texture, low-resolution tape feeling, muted reds and blues, and nostalgic 80s/90s home-video atmosphere. No face modification, no distortion, no stylization drift.",
    likes: 540,
    views: 2900,
    copies: 95,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 19,
    title: "Sunlit Dream Glow",
    category: "Other",
    image: "/19.jpg",
    prompt: "Add a dreamy soft glow effect to the uploaded photo. Keep the subject’s face, identity, pose, outfit, and background unchanged. Apply soft diffused light, gentle highlights, subtle haze, delicate bloom, warm pastel tones, and a romantic cinematic atmosphere. Preserve realistic skin texture and natural details. No face changes, no distortion, no excessive smoothing.",
    likes: 830,
    views: 4100,
    copies: 150,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 20,
    title: "Early 2000s Beach Cam",
    category: "Other",
    image: "/20.jpg",
    prompt: "Transform the uploaded photo into an early 2000s Y2K digital camera look. Keep the person exactly the same with full identity lock. Add direct flash, slight overexposure, shiny highlights, compact camera sharpness, mild noise, nostalgic color tones, and casual party-photo energy. Preserve the original face, outfit, pose, and background. No face changes, no distortion.",
    likes: 1100,
    views: 5800,
    copies: 210,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 21,
    title: "Viral Editorial Glow",
    category: "Other",
    image: "/21.jpg",
    prompt: "Apply a viral high-end Instagram AI photo effect to the uploaded image. Keep the subject's face, identity, body, outfit, pose, and background unchanged. Enhance the image with clean cinematic lighting, premium color grading, subtle glow, crisp details, realistic depth, soft shadows, and an expensive editorial social media look. No face modification, no over-smoothing, no stylization drift",
    likes: 1350,
    views: 7100,
    copies: 260,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 22,
    title: "Digicam Selfie Glow",
    category: "Realistic",
    image: "/22.jpg",
    prompt: "Enhance the uploaded image with a Y2K selfie vibe while preserving all original elements. Strong flash blowout on face, over-sharpened edges, high-contrast highlights, slightly magenta skin tint, shallow dynamic range. Low-resolution nostalgic youth energy. Negative Prompt: Do not change facial identity, body shape, pose, or objects.",
    likes: 1620,
    views: 8400,
    copies: 310,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 23,
    title: "Late Night Screen Light",
    category: "Other",
    image: "/23.jpg",
    prompt: "Use the user uploaded image as the exact base reference. Apply a subtle cold blue-ish lighting effect, as if the scene is illuminated by soft screen light reflecting from a laptop or iPhone in a dark room. Lighting & color treatment: Cast a gentle, cool blue-white light onto the subject's face, skin, and hair. Light should feel soft, diffused, and close-range - like a screen positioned just below or in front of the subject. Blue tone should be restrained and natural, not saturated or neon. Preserve realistic shadow falloff and facial depth; do NOT flatten the image. Highlights take on a cool blue tint, especially on cheekbones, under-eyes, nose bridge, lips, and lower jaw. Shadows remain neutral-to-cool, with deep blacks preserved for night contrast. Very subtle cool color spill onto nearby surfaces (hands, hoodie, laptop edge, background contours if visible). Mood & style: Intimate, quiet, late-night atmosphere. Calm, introspective, slightly lonely or focused mood. Feels like a candid moment lit only by a laptop or phone screen in the dark. Modern fashion/editorial realism, not stylized illustration. Quality & realism: Maintain natural skin texture and pores. No plastic skin, no over smoothing, no beauty retouch. Slight natural noise or very subtle film grain for realism. Preserve original sharpness and depth of field. Hard rules (must follow): Do NOT change the subject's face, facial structure, hair shape, body, or expression. Do NOT change the pose, camera angle, framing, or crop. Do NOT change the outfit or accessories. Do NOT alter the background structure or objects. Do NOT change the aspect ratio. Only apply lighting, color temperature, and mood adjustments. Output should look like the original photo realistically lit by a soft laptop or iPhone at night — cool, subtle, and cinematic.",
    likes: 2050,
    views: 11200,
    copies: 480,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 24,
    title: "Half-Frame Ghost",
    category: "Cinematic",
    image: "/24.jpg",
    prompt: "Transform this uploaded photo into a realistic half-frame double exposure effect as if shot on a half-frame film camera where two exposures accidentally overlapped. Keep the subject recognizable but create a layered double-exposure look: take the existing image and blend a second shifted version over it – the second exposure should be slightly offset horizontally or rotated at a subtle angle. Both exposures should be partially transparent where they overlap, creating a ghostly layered effect where elements of both frames blend together. In the overlapping zone, the brighter areas of one exposure should show through the darker areas of the other — this is how real double exposures interact, based on additive light on film. Add a warm bright light leak — orange, amber, and red tones — bleeding in from one edge or the center where the two half-frames meet, as if light leaked through the film gate. Shift the color palette warm with slightly oversaturated reds and oranges. Add visible medium film grain across the entire combined image. The edges of the frame should show the black border of a half-frame film gate. The overall effect should feel like a beautiful accidental double exposure from a cheap half-frame camera — dreamy, layered, experimental, warm, and authentically analog.",
    likes: 1890,
    views: 9800,
    copies: 400,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 25,
    title: "Flash After Dark",
    category: "Other",
    image: "/25.jpg",
    prompt: "Apply a realistic iPhone night flash photo effect to the uploaded image. Keep the subject's face, identity, outfit, pose, and background unchanged. Add direct phone flash lighting, sharp foreground detail, slight background darkness, natural skin texture, subtle harsh shadows, realistic noise, and candid nightlife photo atmosphere. No beautification, no face change, no AI artifacts.",
    likes: 720,
    views: 3500,
    copies: 130,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 26,
    title: "Low-res Cam",
    category: "Fashion",
    image: "/26.jpg",
    prompt: "Apply old webcam compression while keeping everything recognizable. Pixelated textures, slow-shutter motion softness, dull greenish ambient tone, poor dynamic range, visible image noise clusters. Slight vignette naturally from cheap sensors. Negative Prompt: Do not change facial identity, body shape, pose, or objects.",
    likes: 1280,
    views: 6500,
    copies: 240,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 27,
    title: "Cinematic Gold Beam",
    category: "Other",
    image: "/27.jpg",
    prompt: "Remove all existing lighting and rebuild the scene from scratch with a cinematic lighting set. Use a primary narrow soft spotlight casting a dramatic golden beam from the front-left, slightly above the subject («38° elevation). The light should feel like a tight vertical slice, with soft feathered edges and strong cinematic rolloff. Color temperature is warm golden (around 4200K), creating painterly highlights and sculpted facial contours. Add a secondary ultra-soft diffused fill light from the top-front, extremely low intensity. This fill should keep shadows deep and dramatic while still readable, similar to moody arthouse films. The fill color leans cool and dark, preventing shadow crush while preserving atmosphere. Introduce low-level cool ambient environment light to subtly contrast the warm key light and add cinematic depth without flattening the image. Control shadows carefully: keep them soft but dense, raise the black floor slightly, add a subtle midtone lift, and boost overall cinematic depth so silhouettes feel rich, dimensional, and atmospheric. Enable atmospheric bloom around warm light zones only. The bloom should be golden, filmic, and hazy-never harsh-creating a glowing aura around highlights. Shoot this as if captured on an ARRI ALEXA Mini LF, upgraded to cinema-master quality. Use a large-format sensor look with extended dynamic range, soft cinematic highlight rolloff, strong color depth, and gentle shadow recovery. Apply a film response curve that blends ARRI color science with Kodak-style film latitude. Use an 85mm Master Prime lens with subtle anamorphic character. Background bokeh should be oval and cinematic, with gentle barrel distortion and strong microcontrast to enhance subject separation and depth falloff. Camera settings: ISO 64, 1/120 shutter, f/1.4 aperture, Warm film-stock white balance. Preserve natural skin texture completely. Do not smooth skin-retain pores and real micro-details, with only subtle microtexture enhancement. Apply cinematic softening only to the background to enhance depth cueing and subject isolation. Apply a cinematic color grade with strong warmth in highlights, a restrained teal tint in shadows, and a pronounced gold boost in bright areas. Use a deep cinematic S-curve contrast profile and ARRI-style film color science inspired by Vision3 stocks. Finish with subtle post-processing: Add gentle bloom with a controlled radius, apply Kodak 2383-style film grain that moves organically like real film, apply very light global and micro sharpness (never digital or harsh), introduce a soft cinema depth haze to enhance atmospheric layering and dimensionality. The image should feel painterly, cinematic, moody, and high-end, like a dramatic still frame from a prestige film shot on large-format cinema film.",
    likes: 1750,
    views: 9100,
    copies: 360,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 28,
    title: "Teal Noir",
    category: "Other",
    image: "/28.jpg",
    prompt: "cinematic neo-noir lighting, strong teal and orange color contrast, cold green-teal overhead light from the side, creating hard shadows and sculpted face, warm amber practical light from below and background, glowing and diffused, low-key lighting, deep shadows, high contrast, minimal fill light, night interior mood, moody atmosphere, cinematic color grading, teal shadows, warm highlights, dark background, dramatic lighting, film still look, realistic skin texture, no flat lighting, do not change the composition and appearance.",
    likes: 580,
    views: 3100,
    copies: 110,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 29,
    title: "K Flash Glow",
    category: "Other",
    image: "/29.jpg",
    prompt: "Apply a bold night-flash aesthetic while preserving all original details. Only adjust lighting, glow, and color mood. Keep the environment dark and realistic, with existing shadows intact. Add subtle bokeh on the edges and aim for a dreamy Korean look. Light the subject with a strong, warm, front-facing flash so the face and upper body are the brightest areas. Add soft diffused glow on skin (cheekbones, nose, lips, hair) with slight lens bloom and atmospheric haze for a cinematic high-contrast feel. Hard rule: Do not change the face, hair, background, or composition.",
    likes: 890,
    views: 6500,
    copies: 890,
    tags: ["ai", "art", "creative", "masterpiece"]
  },
  {
    id: 30,
    title: "Vintage Cinema",
    category: "Cinematic",
    image: "/2.jpg",
    prompt: "A beautiful cinematic shot mimicking a vintage film camera...",
    likes: 540,
    views: 1200,
    copies: 85,
    tags: ["vintage", "film"]
  },
  {
    id: 31,
    title: "High Fashion Focus",
    category: "Fashion",
    image: "/4.jpg",
    prompt: "High fashion editorial look with striking contrast...",
    likes: 890,
    views: 3100,
    copies: 140,
    tags: ["fashion", "editorial"]
  },
  {
    id: 32,
    title: "Urban Realistic",
    category: "Realistic",
    image: "/8.jpg",
    prompt: "Ultra-realistic urban street photography style...",
    likes: 1250,
    views: 5600,
    copies: 220,
    tags: ["street", "urban"]
  }
];
