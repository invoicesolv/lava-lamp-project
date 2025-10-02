'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Föregående
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // Show first page, last page, current page, and pages around current page
          const shouldShow = 
            page === 1 || 
            page === totalPages || 
            (page >= currentPage - 2 && page <= currentPage + 2);
          
          if (!shouldShow) {
            // Show ellipsis for gaps
            if (page === 2 && currentPage > 4) {
              return <span key={`ellipsis-${page}`} className="px-3 py-2 text-sm text-gray-500">...</span>;
            }
            if (page === totalPages - 1 && currentPage < totalPages - 3) {
              return <span key={`ellipsis-${page}`} className="px-3 py-2 text-sm text-gray-500">...</span>;
            }
            return null;
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Nästa
        </button>
      </nav>
    </div>
  );
}
