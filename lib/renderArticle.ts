/**
 * Minimal markdown renderer for article content in data/articles.ts.
 *
 * Supports the subset actually used there: ##/### headings, - bullets,
 * 1. numbered items, **bold** and paragraphs. The leading # title is
 * dropped because the article hero already renders it.
 */

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Escapes, then turns **text** into bold. */
function inline(text: string): string {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong class="font-medium text-navy">$1</strong>');
}

export function renderArticle(markdown: string): string {
  const out: string[] = [];
  let items: string[] = [];
  let listTag: 'ul' | 'ol' | null = null;
  // The first paragraph, before any subheading, is styled as a lead.
  let seenHeading = false;
  let leadUsed = false;

  const flushList = () => {
    if (!listTag) return;
    const cls =
      listTag === 'ul'
        ? 'dash-list space-y-2 my-6 text-ink/85'
        : 'list-decimal pl-6 space-y-3 my-6 text-ink/85 marker:text-brass-deep';
    out.push(`<${listTag} class="${cls}">${items.join('')}</${listTag}>`);
    items = [];
    listTag = null;
  };

  for (const raw of markdown.split('\n')) {
    const line = raw.trim();

    if (line === '') {
      flushList();
      continue;
    }

    if (line.startsWith('# ')) {
      flushList();
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      seenHeading = true;
      out.push(`<h3 class="font-sans text-[1.125rem] font-medium tracking-normal text-navy mt-10 mb-2">${inline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith('## ')) {
      flushList();
      seenHeading = true;
      out.push(`<h2 class="text-[2rem] leading-tight mt-14 mb-4">${inline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith('- ')) {
      if (listTag !== 'ul') {
        flushList();
        listTag = 'ul';
      }
      items.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    const numbered = line.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      if (listTag !== 'ol') {
        flushList();
        listTag = 'ol';
      }
      items.push(`<li>${inline(numbered[1])}</li>`);
      continue;
    }

    flushList();

    if (!seenHeading && !leadUsed) {
      leadUsed = true;
      out.push(`<p class="font-serif text-[1.5rem] leading-snug text-navy border-l border-brass pl-6 my-10">${inline(line)}</p>`);
      continue;
    }

    out.push(`<p class="text-ink/85 my-4">${inline(line)}</p>`);
  }

  flushList();
  return out.join('');
}
